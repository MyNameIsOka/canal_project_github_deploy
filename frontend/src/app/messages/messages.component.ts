import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';
import { PopoverModule } from 'ngx-smart-popover';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_RESULT_URL, QUERY_URL, CANCEL_URL, VERSION } from '../globals';
import { saveAs } from 'file-saver';
import { checkstatus } from '../checkstatus.service';
import * as d3 from 'd3';
import { phylotree } from 'phylotree';
import 'phylotree/build/phylotree.css';
import * as svg_download from 'save-svg-as-png';
import { Router } from '@angular/router';
var JSZip = require('jszip');
var JSZipUtils = require('jszip-utils');

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @ViewChild('svg', { static: false }) svg: any;
  private cookieValue: string;
  prevIdArray = [];
  showButton = false;
  widthSVG = 1000;
  heightSVG = 1000;
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // Phylotree parameters
  form: FormGroup;
  phylotreeData: JSON;
  tree: any;
  out_tree: any;
  data: any;
  linearFlag: boolean;
  downloadFlag = 0;
  activateFlag = 0;

  // tslint:disable-next-line: max-line-length
  constructor(
    private _checkstatus: checkstatus,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    public messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit() {
    const firstCookie: string = this.cookieService.get('1');
    const valueSplit = firstCookie.split(';');
    if (valueSplit.length < 6) {
      this.cookieService.deleteAll();
    } else if (Number(valueSplit[5]) !== VERSION) {
      this.cookieService.deleteAll();
    }

    this.prevIdArray = this._checkstatus.getStatus();
    setInterval(() => {
      this._checkstatus.checkStatus();
      this.prevIdArray = this._checkstatus.getStatus();
    }, 3000);
  }

  downloadFiles(input) {
    const formData: any = new FormData();
    formData.set('result_id', input);
    formData.set('result_kind', 'complete');
    this.downloadFlag = 1;
    this.activateFlag = input;
    this.httpClient.post(QUERY_URL, formData, { observe: 'response' }).subscribe((query) => {
      if (query.body['msg'] === 'Finished') {
        this.httpClient.post(GET_RESULT_URL, formData, { responseType: 'arraybuffer' }).subscribe(async (data) => {
          const blob = new Blob([data], {
            type: 'application/zip',
          });
          const jszip = new JSZip();
          jszip.loadAsync(blob).then(async (zip) => {
            try {
              await this.showTree(input);
              await this.delay(2000);
              svg_download.svgAsPngUri(document.getElementById('tree_display'), {}, (uri: any) => {
                const output = this.dataURItoBlob(uri);
                zip.file('phylotree_linear.png', output);
              });
              await this.delay(500);
              await this.radial();
              await this.delay(1000);
              await svg_download.svgAsPngUri(document.getElementById('tree_display'), {}, (uri: any) => {
                const output = this.dataURItoBlob(uri);
                zip.file('phylotree_radial.png', output);
              });
            } catch (e) {
              zip.remove('phylotree_linear.png');
            }
            zip.generateAsync({ type: 'blob' }).then(function (content) {
              saveAs(content, 'results.zip');
            });
          });
          await this.delay(5000);
          this.deleteTree();
          this.downloadFlag = 0;
          this.activateFlag = 0;
        });
      } else {
        // pass
      }
    });
  }

  deleteAllCookies() {
    this.cookieService.deleteAll();
  }

  downloadTree() {
    // console.log(document.getElementById('tree_display'));
    svg_download.svgAsPngUri(document.getElementById('tree_display'), {}, (uri: any) => {
      // console.log(uri)
      const output = this.dataURItoBlob(uri);
      saveAs(output, 'phylotree.png');
      // pass
    });
  }

  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    var ia = new Uint8Array(ab);
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;
  }
  notfinished(input) {
    if (input !== 'Finished') {
      return true;
    }
  }

  started(input) {
    const array = ['Running.', 'Running..', 'Finished'];
    if (array.includes(input)) {
      return true;
    } else {
      return false;
    }
  }

  cancelJob(input) {
    const formData: any = new FormData();
    formData.append('result_id', input);
    const allCookies: {} = this.cookieService.getAll();

    this.httpClient.post(CANCEL_URL, formData, { observe: 'response' }).subscribe((query) => {
      // tslint:disable-next-line: forin
      for (let key in allCookies) {
        let value = allCookies[key];
        let valueSplit = value.split(';');
        if (valueSplit[0] === input) {
          console.log(input);
          valueSplit[1] = query.body['msg'];
          this.cookieService.set(
            key,
            valueSplit[0] +
              ';' +
              valueSplit[1] +
              ';' +
              valueSplit[2] +
              ';' +
              valueSplit[3] +
              ';' +
              valueSplit[4] +
              ';' +
              valueSplit[5]
          );
        }
      }
    });
  }

  showTree(input) {
    d3.select('#tree_display').selectAll('*').remove();
    const formData: any = new FormData();
    const httpOptions: { headers: any; responseType: any } = {
      headers: new HttpHeaders({
        responseType: 'application/json',
      }),
      responseType: 'application/json',
    };
    formData.append('result_id', input);
    formData.append('result_kind', 'tree');
    this.httpClient.post(QUERY_URL, formData, { observe: 'response' }).subscribe((query) => {
      if (query.body['msg'] === 'Finished') {
        this.httpClient.post(GET_RESULT_URL, formData, { responseType: 'text' }).subscribe((data) => {
          this.data = data;
          this.tree = new phylotree(this.data);
          this.out_tree = this.tree.render('#tree_display', {
            id: 'tree_render',
            height: 100,
            width: 100,
            'left-right-spacing': 'fixed-step',
            'top-bottom-spacing': 'fixed-step',
            'minimum-per-node-spacing': 15,
            'maximum-per-node-spacing': 100,
            'maximum-per-level-spacing': 100,
            'is-radial': false,
            'max-radius': 768,
            'left-offset': 0,
          });
          this.tree.display.width = this.tree.display.size[1];
          this.tree.display.height = this.tree.display.size[0];
          this.widthSVG = this.tree.display.width;
          this.heightSVG = this.tree.display.height;
          this.svg.nativeElement.setAttribute('viewBox', `0 0 ${this.widthSVG} ${this.heightSVG + 50}`);
          this.linearFlag = true;
          return this.out_tree;
        });
      } else {
        // pass
      }
      this.showButton = true;
    });
  }

  deleteTree() {
    d3.select('#tree_display').selectAll('*').remove();
    this.showButton = false;
  }

  tree_update() {
    this.tree.display.width = this.tree.display.size[1];
    this.tree.display.height = this.tree.display.size[0] * 1.05;
    this.widthSVG = this.tree.display.width;
    this.heightSVG = this.tree.display.height;
    this.svg.nativeElement.setAttribute('viewBox', `0 0 ${this.widthSVG} ${this.heightSVG}`);
    this.tree.display.update();
  }

  vertical_increase() {
    if (
      this.tree.display.phylotree.display.fixed_width[0] <
      this.tree.display.phylotree.display.options['maximum-per-node-spacing']
    ) {
      this.tree.display.phylotree.display.fixed_width[0] = this.tree.display.phylotree.display.fixed_width[0] + 1;
      this.tree_update();
    }
  }
  vertical_decrease() {
    if (
      this.tree.display.phylotree.display.fixed_width[0] >
      this.tree.display.phylotree.display.options['minimum-per-node-spacing']
    ) {
      this.tree.display.phylotree.display.fixed_width[0] = this.tree.display.phylotree.display.fixed_width[0] - 1;
      this.tree_update();
    }
  }
  horizontal_increase() {
    if (
      this.tree.display.phylotree.display.fixed_width[1] <
      this.tree.display.phylotree.display.options['maximum-per-node-spacing']
    ) {
      this.tree.display.phylotree.display.fixed_width[1] = this.tree.display.phylotree.display.fixed_width[1] + 1;
      this.tree_update();
    }
  }
  horizontal_decrease() {
    if (
      this.tree.display.phylotree.display.fixed_width[1] >
      this.tree.display.phylotree.display.options['minimum-per-node-spacing']
    ) {
      this.tree.display.phylotree.display.fixed_width[1] = this.tree.display.phylotree.display.fixed_width[1] - 1;
      this.tree_update();
    }
  }

  radial_increase() {
    this.widthSVG = this.widthSVG * 1.1;
    this.heightSVG = this.heightSVG * 1.1;
    this.tree.display.update();
  }

  radial_decrease() {
    this.widthSVG = this.widthSVG * 0.9;
    this.heightSVG = this.heightSVG * 0.9;
    this.tree.display.update();
  }

  radial() {
    let updateDIV: number;
    d3.select('#tree_display').selectAll('*').remove();
    d3.select('#container').attr('width', 1000);
    d3.select('#container').attr('height', 1000);
    // this variable is really necessary to update the DIV plane...
    updateDIV = document.getElementById('container').scrollHeight;
    this.tree = new phylotree(this.data);
    this.out_tree = this.tree.render('#tree_display', {
      id: 'tree_render',
      height: 100,
      width: 100,
      'left-right-spacing': 'fixed-step',
      'top-bottom-spacing': 'fixed-step',
      'minimum-per-node-spacing': 2,
      'maximum-per-node-spacing': 100,
      'maximum-per-level-spacing': 100,
      'is-radial': true,
      'max-radius': 768,
      'left-offset': 0,
    });
    this.tree.display.width = this.tree.display.size[1];
    this.tree.display.height = this.tree.display.size[0];
    this.tree.display.update();
    this.widthSVG = this.tree.display.width;
    this.heightSVG = this.tree.display.height;
    this.svg.nativeElement.setAttribute('viewBox', `0 0 ${this.widthSVG} ${this.heightSVG}`);
    this.linearFlag = false;
    this.widthSVG = this.widthSVG * 0.35;
    this.heightSVG = this.heightSVG * 0.35;
    this.tree.display.update();
  }

  linear() {
    let updateDIV: number;
    d3.select('#tree_display').selectAll('*').remove();
    d3.select('#container').attr('width', 1000);
    d3.select('#container').attr('height', 1000);
    // this variable is really necessary to update the DIV plane...
    updateDIV = document.getElementById('container').scrollHeight;
    this.tree = new phylotree(this.data);
    this.out_tree = this.tree.render('#tree_display', {
      id: 'tree_render',
      height: 100,
      width: 100,
      'left-right-spacing': 'fixed-step',
      'top-bottom-spacing': 'fixed-step',
      'minimum-per-node-spacing': 15,
      'maximum-per-node-spacing': 1000,
      'maximum-per-level-spacing': 1000,
      'is-radial': false,
      'max-radius': 768,
      'left-offset': 0,
    });
    this.tree.display.width = this.tree.display.size[1];
    this.tree.display.height = this.tree.display.size[0];
    this.tree.display.update();
    this.widthSVG = this.tree.display.width;
    this.heightSVG = this.tree.display.height;
    this.svg.nativeElement.setAttribute('viewBox', `0 0 ${this.widthSVG} ${this.heightSVG}`);
    this.linearFlag = true;
    this.tree.display.update();
  }
  
  async clear_history(){
	this.messageService.clear();
	await this.router.navigateByUrl("/refresh",{skipLocationChange:true});
	this.router.navigate(["/"]);
  }
  
}