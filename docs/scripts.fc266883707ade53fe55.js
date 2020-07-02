!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  var n = [],
    i = e.document,
    r = Object.getPrototypeOf,
    o = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    u = {},
    c = u.toString,
    f = u.hasOwnProperty,
    h = f.toString,
    d = h.call(Object),
    p = {},
    g = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var r,
      o,
      s = (n = n || i).createElement('script');
    if (((s.text = e), t)) for (r in v) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && s.setAttribute(r, o);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function _(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? u[c.call(e)] || 'object' : typeof e;
  }
  var b = '3.4.1',
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function T(e) {
    var t = !!e && 'length' in e && e.length,
      n = _(e);
    return !g(e) && !m(e) && ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
  }
  (w.fn = w.prototype = {
    jquery: b,
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice,
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for (
        'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
          'object' == typeof s || g(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (i = e[t]),
              '__proto__' !== t &&
                s !== i &&
                (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                  ? ((n = s[t]),
                    (o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}),
                    (r = !1),
                    (s[t] = w.extend(u, o, i)))
                  : void 0 !== i && (s[t] = i));
      return s;
    }),
    w.extend({
      expando: 'jQuery' + (b + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== c.call(e) ||
          ((t = r(e)) && ('function' != typeof (n = f.call(t, 'constructor') && t.constructor) || h.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        y(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(E, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (T(Object(e)) ? w.merge(n, 'string' == typeof e ? [e] : e) : a.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (T(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return s.apply([], a);
      },
      guid: 1,
      support: p,
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
      u['[object ' + t + ']'] = t.toLowerCase();
    });
  var C = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      u,
      c,
      f,
      h,
      d,
      p,
      g,
      m,
      v,
      y,
      _,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      E = 0,
      T = 0,
      C = le(),
      x = le(),
      S = le(),
      D = le(),
      A = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      I = [],
      k = I.pop,
      O = I.push,
      j = I.push,
      L = I.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      q = '[\\x20\\t\\r\\n\\f]',
      R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      F =
        '\\[' +
        q +
        '*(' +
        R +
        ')(?:' +
        q +
        '*([*^$|!~]?=)' +
        q +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        R +
        '))|)' +
        q +
        '*\\]',
      M =
        ':(' +
        R +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        F +
        ')*)|.*)\\)|)',
      W = new RegExp(q + '+', 'g'),
      B = new RegExp('^' + q + '+|((?:^|[^\\\\])(?:\\\\.)*)' + q + '+$', 'g'),
      U = new RegExp('^' + q + '*,' + q + '*'),
      K = new RegExp('^' + q + '*([>+~]|' + q + ')' + q + '*'),
      $ = new RegExp(q + '|>'),
      Q = new RegExp(M),
      V = new RegExp('^' + R + '$'),
      z = {
        ID: new RegExp('^#(' + R + ')'),
        CLASS: new RegExp('^\\.(' + R + ')'),
        TAG: new RegExp('^(' + R + '|[*])'),
        ATTR: new RegExp('^' + F),
        PSEUDO: new RegExp('^' + M),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            q +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            q +
            '*(?:([+-]|)' +
            q +
            '*(\\d+)|))' +
            q +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + H + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            q +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            q +
            '*((?:-\\d)?\\d*)' +
            q +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      X = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\([\\da-f]{1,6}' + q + '?|(' + q + ')|.)', 'ig'),
      ne = function (e, t, n) {
        var i = '0x' + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
          : '\\' + e;
      },
      oe = function () {
        h();
      },
      se = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      j.apply((I = L.call(w.childNodes)), w.childNodes);
    } catch (t) {
      j = {
        apply: I.length
          ? function (e, t) {
              O.apply(e, L.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, r) {
      var o,
        a,
        u,
        c,
        f,
        p,
        v,
        y = t && t.ownerDocument,
        E = t ? t.nodeType : 9;
      if (((i = i || []), 'string' != typeof e || !e || (1 !== E && 9 !== E && 11 !== E))) return i;
      if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), (t = t || d), g)) {
        if (11 !== E && (f = Z.exec(e)))
          if ((o = f[1])) {
            if (9 === E) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i;
          } else {
            if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return j.apply(i, t.getElementsByClassName(o)), i;
          }
        if (n.qsa && !D[e + ' '] && (!m || !m.test(e)) && (1 !== E || 'object' !== t.nodeName.toLowerCase())) {
          if (((v = e), (y = t), 1 === E && $.test(e))) {
            for (
              (c = t.getAttribute('id')) ? (c = c.replace(ie, re)) : t.setAttribute('id', (c = b)),
                a = (p = s(e)).length;
              a--;

            )
              p[a] = '#' + c + ' ' + _e(p[a]);
            (v = p.join(',')), (y = (ee.test(e) && ve(t.parentNode)) || t);
          }
          try {
            return j.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            D(e, !0);
          } finally {
            c === b && t.removeAttribute('id');
          }
        }
      }
      return l(e.replace(B, '$1'), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return e.push(n + ' ') > i.cacheLength && delete t[e.shift()], (t[n + ' '] = r);
      };
    }
    function ue(e) {
      return (e[b] = !0), e;
    }
    function ce(e) {
      var t = d.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function he(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function me(e) {
      return ue(function (t) {
        return (
          (t = +t),
          ue(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (o = ae.isXML = function (e) {
      var t = (e.ownerDocument || e).documentElement;
      return !Y.test(e.namespaceURI || (t && t.nodeName) || 'HTML');
    }),
    (h = ae.setDocument = function (e) {
      var t,
        r,
        s = e ? e.ownerDocument || e : w;
      return (
        s !== d &&
          9 === s.nodeType &&
          s.documentElement &&
          ((p = (d = s).documentElement),
          (g = !o(d)),
          w !== d &&
            (r = d.defaultView) &&
            r.top !== r &&
            (r.addEventListener
              ? r.addEventListener('unload', oe, !1)
              : r.attachEvent && r.attachEvent('onunload', oe)),
          (n.attributes = ce(function (e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (n.getElementsByTagName = ce(function (e) {
            return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
          })),
          (n.getElementsByClassName = J.test(d.getElementsByClassName)),
          (n.getById = ce(function (e) {
            return (p.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
          })),
          n.getById
            ? ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n,
                    i,
                    r,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                    for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                      if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  r = 0,
                  o = t.getElementsByTagName(e);
                if ('*' === e) {
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return o;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }),
          (v = []),
          (m = []),
          (n.qsa = J.test(d.querySelectorAll)) &&
            (ce(function (e) {
              (p.appendChild(e).innerHTML =
                "<a id='" +
                b +
                "'></a><select id='" +
                b +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + q + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length || m.push('\\[' + q + '*(?:value|' + H + ')'),
                e.querySelectorAll('[id~=' + b + '-]').length || m.push('~='),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + b + '+*').length || m.push('.#.+[+~]');
            }),
            ce(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length && m.push('name' + q + '*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                (p.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (n.matchesSelector = J.test(
            (y =
              p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)
          )) &&
            ce(function (e) {
              (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), v.push('!=', M);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (t = J.test(p.compareDocumentPosition)),
          (_ =
            t || J.test(p.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (A = t
            ? function (e, t) {
                if (e === t) return (f = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === d || (e.ownerDocument === w && _(w, e))
                      ? -1
                      : t === d || (t.ownerDocument === w && _(w, t))
                      ? 1
                      : c
                      ? P(c, e) - P(c, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (f = !0), 0;
                var n,
                  i = 0,
                  r = e.parentNode,
                  o = t.parentNode,
                  s = [e],
                  a = [t];
                if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (r === o) return he(e, t);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; s[i] === a[i]; ) i++;
                return i ? he(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
              })),
        d
      );
    }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== d && h(e),
        n.matchesSelector && g && !D[t + ' '] && (!v || !v.test(t)) && (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
        } catch (e) {
          D(t, !0);
        }
      return 0 < ae(t, d, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && h(e), _(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) !== d && h(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + '').replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(A), f)) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (c = null), e;
    }),
    (r = ae.getText = function (e) {
      var t,
        n = '',
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += r(t);
      return n;
    }),
    ((i = ae.selectors = {
      cacheLength: 50,
      createPseudo: ue,
      match: z,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || ae.error(e[0]),
                (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && ae.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return z.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  Q.test(n) &&
                  (t = s(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return '*' === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = C[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + q + ')' + e + '(' + q + '|$)')) &&
              C(e, function (e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var r = ae.attr(i, e);
            return null == r
              ? '!=' === t
              : !t ||
                  ((r += ''),
                  '=' === t
                    ? r === n
                    : '!=' === t
                    ? r !== n
                    : '^=' === t
                    ? n && 0 === r.indexOf(n)
                    : '*=' === t
                    ? n && -1 < r.indexOf(n)
                    : '$=' === t
                    ? n && r.slice(-n.length) === n
                    : '~=' === t
                    ? -1 < (' ' + r.replace(W, ' ') + ' ').indexOf(n)
                    : '|=' === t && (r === n || r.slice(0, n.length + 1) === n + '-'));
          };
        },
        CHILD: function (e, t, n, i, r) {
          var o = 'nth' !== e.slice(0, 3),
            s = 'last' !== e.slice(-4),
            a = 'of-type' === t;
          return 1 === i && 0 === r
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, l) {
                var u,
                  c,
                  f,
                  h,
                  d,
                  p,
                  g = o !== s ? 'nextSibling' : 'previousSibling',
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  _ = !1;
                if (m) {
                  if (o) {
                    for (; g; ) {
                      for (h = t; (h = h[g]); ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = g = 'only' === e && !p && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                    for (
                      _ =
                        (d =
                          (u =
                            (c = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] ===
                            E && u[1]) && u[2],
                        h = d && m.childNodes[d];
                      (h = (++d && h && h[g]) || (_ = d = 0) || p.pop());

                    )
                      if (1 === h.nodeType && ++_ && h === t) {
                        c[e] = [E, d, _];
                        break;
                      }
                  } else if (
                    (y &&
                      (_ = d =
                        (u = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] ===
                          E && u[1]),
                    !1 === _)
                  )
                    for (
                      ;
                      (h = (++d && h && h[g]) || (_ = d = 0) || p.pop()) &&
                      ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                        !++_ ||
                        (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, _]),
                        h !== t));

                    );
                  return (_ -= r) === i || (_ % i == 0 && 0 <= _ / i);
                }
              };
        },
        PSEUDO: function (e, t) {
          var n,
            r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error('unsupported pseudo: ' + e);
          return r[b]
            ? r(t)
            : 1 < r.length
            ? ((n = [e, e, '', t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ue(function (e, n) {
                    for (var i, o = r(e, t), s = o.length; s--; ) e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                  })
                : function (e) {
                    return r(e, 0, n);
                  })
            : r;
        },
      },
      pseudos: {
        not: ue(function (e) {
          var t = [],
            n = [],
            i = a(e.replace(B, '$1'));
          return i[b]
            ? ue(function (e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
              })
            : function (e, r, o) {
                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
              };
        }),
        has: ue(function (e) {
          return function (t) {
            return 0 < ae(e, t).length;
          };
        }),
        contains: ue(function (e) {
          return (
            (e = e.replace(te, ne)),
            function (t) {
              return -1 < (t.textContent || r(t)).indexOf(e);
            }
          );
        }),
        lang: ue(function (e) {
          return (
            V.test(e || '') || ae.error('unsupported lang: ' + e),
            (e = e.replace(te, ne).toLowerCase()),
            function (t) {
              var n;
              do {
                if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                  return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === p;
        },
        focus: function (e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
        },
        selected: function (e) {
          return !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return G.test(e.nodeName);
        },
        input: function (e) {
          return X.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function (e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: me(function () {
          return [0];
        }),
        last: me(function (e, t) {
          return [t - 1];
        }),
        eq: me(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: me(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: me(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        }),
      },
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = de(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function _e(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function be(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && 'parentNode' === o,
        a = T++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              h = [E, a];
            if (l) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[o]) && u[0] === E && u[1] === a) return (h[2] = u[2]);
                    if (((c[o] = h)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Ee(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function Te(e, t, n, i, r, o) {
      return (
        i && !i[b] && (i = Te(i)),
        r && !r[b] && (r = Te(r, o)),
        ue(function (o, s, a, l) {
          var u,
            c,
            f,
            h = [],
            d = [],
            p = s.length,
            g =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || '*', a.nodeType ? [a] : a, []),
            m = !e || (!o && t) ? g : Ee(g, h, e, a, l),
            v = n ? (r || (o ? e : p || i) ? [] : s) : m;
          if ((n && n(m, v, a, l), i))
            for (u = Ee(v, d), i(u, [], a, l), c = u.length; c--; ) (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = v.length; c--; ) (f = v[c]) && u.push((m[c] = f));
                r(null, (v = []), u, l);
              }
              for (c = v.length; c--; ) (f = v[c]) && -1 < (u = r ? P(o, f) : h[c]) && (o[u] = !(s[u] = f));
            }
          } else (v = Ee(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[' '],
          l = s ? 1 : 0,
          c = be(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          f = be(
            function (e) {
              return -1 < P(t, e);
            },
            a,
            !0
          ),
          h = [
            function (e, n, i) {
              var r = (!s && (i || n !== u)) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) h = [be(we(h), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return Te(
              1 < l && we(h),
              1 < l && _e(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(B, '$1'),
              n,
              l < r && Ce(e.slice(l, r)),
              r < o && Ce((e = e.slice(r))),
              r < o && _e(e)
            );
          }
          h.push(n);
        }
      return we(h);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize = function (e, t) {
        var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c = x[e + ' '];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, l = [], u = i.preFilter; a; ) {
          for (s in ((n && !(r = U.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
          (n = !1),
          (r = K.exec(a)) &&
            ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, ' ') }), (a = a.slice(n.length))),
          i.filter))
            !(r = z[s].exec(a)) ||
              (u[s] && !(r = u[s](r))) ||
              ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? ae.error(e) : x(e, l).slice(0);
      }),
      (a = ae.compile = function (e, t) {
        var n,
          r,
          o,
          a,
          l,
          c,
          f = [],
          p = [],
          m = S[e + ' '];
        if (!m) {
          for (t || (t = s(e)), n = t.length; n--; ) (m = Ce(t[n]))[b] ? f.push(m) : p.push(m);
          (m = S(
            e,
            ((r = p),
            (a = 0 < (o = f).length),
            (l = 0 < r.length),
            (c = function (e, t, n, s, c) {
              var f,
                p,
                m,
                v = 0,
                y = '0',
                _ = e && [],
                b = [],
                w = u,
                T = e || (l && i.find.TAG('*', c)),
                C = (E += null == w ? 1 : Math.random() || 0.1),
                x = T.length;
              for (c && (u = t === d || t || c); y !== x && null != (f = T[y]); y++) {
                if (l && f) {
                  for (p = 0, t || f.ownerDocument === d || (h(f), (n = !g)); (m = r[p++]); )
                    if (m(f, t || d, n)) {
                      s.push(f);
                      break;
                    }
                  c && (E = C);
                }
                a && ((f = !m && f) && v--, e && _.push(f));
              }
              if (((v += y), a && y !== v)) {
                for (p = 0; (m = o[p++]); ) m(_, b, t, n);
                if (e) {
                  if (0 < v) for (; y--; ) _[y] || b[y] || (b[y] = k.call(s));
                  b = Ee(b);
                }
                j.apply(s, b), c && !e && 0 < b.length && 1 < v + o.length && ae.uniqueSort(s);
              }
              return c && ((E = C), (u = w)), _;
            }),
            a ? ue(c) : c)
          )).selector = e;
        }
        return m;
      }),
      (l = ae.select = function (e, t, n, r) {
        var o,
          l,
          u,
          c,
          f,
          h = 'function' == typeof e && e,
          d = !r && s((e = h.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            2 < (l = d[0] = d[0].slice(0)).length &&
            'ID' === (u = l[0]).type &&
            9 === t.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
            h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (o = z.needsContext.test(e) ? 0 : l.length; o-- && !i.relative[(c = (u = l[o]).type)]; )
            if (
              (f = i.find[c]) &&
              (r = f(u.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))
            ) {
              if ((l.splice(o, 1), !(e = r.length && _e(l)))) return j.apply(n, r), n;
              break;
            }
        }
        return (h || a(e, d))(r, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
      }),
      (n.sortStable = b.split('').sort(A).join('') === b),
      (n.detectDuplicates = !!f),
      h(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
      })),
      ce(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(H, function (e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      ae
    );
  })(e);
  (w.find = C),
    (w.expr = C.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = C.uniqueSort),
    (w.text = C.getText),
    (w.isXMLDoc = C.isXML),
    (w.contains = C.contains),
    (w.escapeSelector = C.escape);
  var x = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function I(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? w.grep(e, function (e) {
          return -1 < l.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(I(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(I(this, e || [], !0));
      },
      is: function (e) {
        return !!I(this, 'string' == typeof e && D.test(e) ? w(e) : e || [], !1).length;
      },
    });
  var k,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var r, o;
    if (!e) return this;
    if (((n = n || k), 'string' == typeof e)) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || (!r[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          (w.merge(
            this,
            w.parseHTML(r[1], (t = t instanceof w ? t[0] : t) && t.nodeType ? t.ownerDocument || t : i, !0)
          ),
          N.test(r[1]) && w.isPlainObject(t))
        )
          for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (o = i.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (k = w(i));
  var j = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = 'string' != typeof e && w(e);
      if (!D.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? l.call(w(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return x(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return x(e, 'parentNode', n);
        },
        next: function (e) {
          return P(e, 'nextSibling');
        },
        prev: function (e) {
          return P(e, 'previousSibling');
        },
        nextAll: function (e) {
          return x(e, 'nextSibling');
        },
        prevAll: function (e) {
          return x(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return x(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return x(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e), w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var r = w.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (r = w.filter(i, r)),
            1 < this.length && (L[e] || w.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function q(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function F(e, t, n, i) {
    var r;
    try {
      e && g((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && g((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t;
    e =
      'string' == typeof e
        ? ((t = {}),
          w.each(e.match(H) || [], function (e, n) {
            t[n] = !0;
          }),
          t)
        : w.extend({}, e);
    var n,
      i,
      r,
      o,
      s = [],
      a = [],
      l = -1,
      u = function () {
        for (o = o || e.once, r = n = !0; a.length; l = -1)
          for (i = a.shift(); ++l < s.length; )
            !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
        e.memory || (i = !1), (n = !1), o && (s = i ? [] : '');
      },
      c = {
        add: function () {
          return (
            s &&
              (i && !n && ((l = s.length - 1), a.push(i)),
              (function t(n) {
                w.each(n, function (n, i) {
                  g(i) ? (e.unique && c.has(i)) || s.push(i) : i && i.length && 'string' !== _(i) && t(i);
                });
              })(arguments),
              i && !n && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (o = a = []), (s = i = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (o = a = []), i || n || (s = i = ''), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, t) {
          return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), a.push(t), n || u()), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            ['notify', 'progress', w.Callbacks('memory'), w.Callbacks('memory'), 2],
            ['resolve', 'done', w.Callbacks('once memory'), w.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', w.Callbacks('once memory'), w.Callbacks('once memory'), 1, 'rejected'],
          ],
          i = 'pending',
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var r = g(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && g(e.promise)
                        ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                        : t[i[0] + 'With'](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                        g((u = e && ('object' == typeof e || 'function' == typeof e) && e.then))
                          ? r
                            ? u.call(e, s(o, n, q, r), s(o, n, R, r))
                            : u.call(e, s(++o, n, q, r), s(o, n, R, r), s(o, n, q, n.notifyWith))
                          : (i !== q && ((a = void 0), (l = [e])), (r || n.resolveWith)(a, l));
                      }
                    },
                    c = r
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (u) {
                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(u, c.stackTrace),
                              o <= t + 1 && (i !== R && ((a = void 0), (l = [u])), n.rejectWith(a, l));
                          }
                        };
                  t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, g(r) ? r : q, e.notifyWith)),
                    n[1][3].add(s(0, e, g(t) ? t : q)),
                    n[2][3].add(s(0, e, g(i) ? i : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
              }),
              (o[t[0] + 'With'] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this), (r[e] = 1 < arguments.length ? o.call(arguments) : n), --t || s.resolveWith(i, r);
            };
          };
        if (t <= 1 && (F(e, s.done(a(n)).resolve, s.reject, !t), 'pending' === s.state() || g(r[n] && r[n].then)))
          return s.then();
        for (; n--; ) F(r[n], a(n), s.reject);
        return s.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = w.Deferred();
  function B() {
    i.removeEventListener('DOMContentLoaded', B), e.removeEventListener('load', B), w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          W.resolveWith(i, [w]);
      },
    }),
    (w.ready.then = W.then),
    'complete' === i.readyState || ('loading' !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (i.addEventListener('DOMContentLoaded', B), e.addEventListener('load', B));
  var U = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ('object' === _(n)) for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        g(i) || (s = !0),
        u &&
          (s
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    K = /^-ms-/,
    $ = /-([a-z])/g;
  function Q(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(K, 'ms-').replace($, Q);
  }
  var z = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            z(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ('string' == typeof t) r[V(t)] = n;
        else for (i in t) r[V(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(H) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var X = new Y(),
    G = new Y(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (((i = 'data-' + t.replace(Z, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(i)))) {
        try {
          n =
            'true' === (r = n) ||
            ('false' !== r && ('null' === r ? null : r === +r + '' ? +r : J.test(r) ? JSON.parse(r) : r));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return G.hasData(e) || X.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return X.access(e, t, n);
    },
    _removeData: function (e, t) {
      X.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((r = G.get(o)), 1 === o.nodeType && !X.get(o, 'hasDataAttrs'))) {
            for (n = s.length; n--; )
              s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = V(i.slice(5))), ee(o, i, r[i]));
            X.set(o, 'hasDataAttrs', !0);
          }
          return r;
        }
        return 'object' == typeof e
          ? this.each(function () {
              G.set(this, e);
            })
          : U(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function () {
                  G.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = X.get(e, (t = (t || 'fx') + 'queue'))),
            n && (!i || Array.isArray(n) ? (i = X.access(e, t, w.makeArray(n))) : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        var n = w.queue(e, (t = t || 'fx')),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          X.get(e, n) ||
          X.access(e, n, {
            empty: w.Callbacks('once memory').add(function () {
              X.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
          (n = X.get(o[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i'),
    ie = ['Top', 'Right', 'Bottom', 'Left'],
    re = i.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    se = { composed: !0 };
  re.getRootNode &&
    (oe = function (e) {
      return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
    });
  var ae = function (e, t) {
      return (
        'none' === (e = t || e).style.display || ('' === e.style.display && oe(e) && 'none' === w.css(e, 'display'))
      );
    },
    le = function (e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    };
  function ue(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, '');
          },
      l = a(),
      u = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
      c = e.nodeType && (w.cssNumber[t] || ('px' !== u && +l)) && ne.exec(w.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; s--; )
        w.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
      w.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n && ((u[c] = X.get(i, 'display') || null), u[c] || (i.style.display = '')),
            '' === i.style.display &&
              ae(i) &&
              (u[c] =
                ((l = s = o = void 0),
                (s = (r = i).ownerDocument),
                (l = ce[(a = r.nodeName)]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (l = w.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === l && (l = 'block'),
                  (ce[a] = l)))))
          : 'none' !== n && ((u[c] = 'none'), X.set(i, 'display', n)));
    for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var he = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  function me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++) X.set(e[n], 'globalEval', !t || X.get(t[n], 'globalEval'));
  }
  (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
  var ye,
    _e,
    be = /<|&#?\w+;/;
  function we(e, t, n, i, r) {
    for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === _(o)) w.merge(h, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          for (
            s = s || f.appendChild(t.createElement('div')),
              a = (de.exec(o) || ['', ''])[1].toLowerCase(),
              s.innerHTML = (l = ge[a] || ge._default)[1] + w.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            s = s.lastChild;
          w.merge(h, s.childNodes), ((s = f.firstChild).textContent = '');
        } else h.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = h[d++]); )
      if (i && -1 < w.inArray(o, i)) r && r.push(o);
      else if (((u = oe(o)), (s = me(f.appendChild(o), 'script')), u && ve(s), n))
        for (c = 0; (o = s[c++]); ) pe.test(o.type || '') && n.push(o);
    return f;
  }
  (ye = i.createDocumentFragment().appendChild(i.createElement('div'))),
    (_e = i.createElement('input')).setAttribute('type', 'radio'),
    _e.setAttribute('checked', 'checked'),
    _e.setAttribute('name', 't'),
    ye.appendChild(_e),
    (p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = '<textarea>x</textarea>'),
    (p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
  var Ee = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function De(e, t) {
    return (
      (e ===
        (function () {
          try {
            return i.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ae(e, t, n, i, r, o) {
    var s, a;
    if ('object' == typeof t) {
      for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r && ('string' == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Se;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return w().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, r, i, n);
      })
    );
  }
  function Ne(e, t, n) {
    n
      ? (X.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              s = X.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = o.call(arguments)),
                X.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (r = X.get(this, t)) || i ? X.set(this, t, !1) : (r = {}),
                s !== r)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), r.value;
            } else
              s.length &&
                (X.set(this, t, { value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this) }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === X.get(e, t) && w.event.add(e, t, xe);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = X.get(e);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && w.find.matchesSelector(re, r),
            n.guid || (n.guid = w.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
              }),
            u = (t = (t || '').match(H) || ['']).length;
          u--;

        )
          (d = g = (a = Ce.exec(t[u]) || [])[1]),
            (p = (a[2] || '').split('.').sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (f = w.event.special[(d = (r ? f.delegateType : f.bindType) || d)] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: p.join('.'),
                },
                o
              )),
              (h = l[d]) ||
                (((h = l[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(d, s))),
              f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (w.event.global[d] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = X.hasData(e) && X.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || '').match(H) || ['']).length; u--; )
          if (((d = g = (a = Ce.exec(t[u]) || [])[1]), (p = (a[2] || '').split('.').sort()), d)) {
            for (
              f = w.event.special[d] || {},
                h = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                a = a[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = o = h.length;
              o--;

            )
              (c = h[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
            s &&
              !h.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) || w.removeEvent(e, d, m.handle), delete l[d]);
          } else for (d in l) w.event.remove(e, d + t[u], n, i, !0);
        w.isEmptyObject(l) && X.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = w.event.fix(e),
        l = new Array(arguments.length),
        u = (X.get(this, 'events') || {})[a.type] || [],
        c = w.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
        for (s = w.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
            (a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + ' ')] &&
                (s[r] = i.needsContext ? -1 < w(r, this).index(u) : w.find(r, this, null, [u]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return he.test(t.type) && t.click && A(t, 'input') && Ne(t, 'click', xe), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return he.test(t.type) && t.click && A(t, 'input') && Ne(t, 'click'), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (he.test(t.type) && t.click && A(t, 'input') && X.get(t, 'click')) || A(t, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Se),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Ee.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ne(this, e, De), !1;
        },
        trigger: function () {
          return Ne(this, e), !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Ae(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ae(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
            this
          );
        if ('object' == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    ke = /<script|<style|<link/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && w(e).children('tbody')[0]) || e;
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function He(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function qe(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (X.hasData(e) && ((o = X.access(e)), (s = X.set(t, o)), (u = o.events)))
        for (r in (delete s.handle, (s.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) w.event.add(t, r, u[r][n]);
      G.hasData(e) && ((a = G.access(e)), (l = w.extend({}, a)), G.set(t, l));
    }
  }
  function Re(e, t, n, i) {
    t = s.apply([], t);
    var r,
      o,
      a,
      l,
      u,
      c,
      f = 0,
      h = e.length,
      d = h - 1,
      m = t[0],
      v = g(m);
    if (v || (1 < h && 'string' == typeof m && !p.checkClone && Oe.test(m)))
      return e.each(function (r) {
        var o = e.eq(r);
        v && (t[0] = m.call(this, r, o.html())), Re(o, t, n, i);
      });
    if (
      h &&
      ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)
    ) {
      for (l = (a = w.map(me(r, 'script'), Pe)).length; f < h; f++)
        (u = r), f !== d && ((u = w.clone(u, !0, !0)), l && w.merge(a, me(u, 'script'))), n.call(e[f], u, f);
      if (l)
        for (c = a[a.length - 1].ownerDocument, w.map(a, He), f = 0; f < l; f++)
          pe.test((u = a[f]).type || '') &&
            !X.access(u, 'globalEval') &&
            w.contains(c, u) &&
            (u.src && 'module' !== (u.type || '').toLowerCase()
              ? w._evalUrl && !u.noModule && w._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') })
              : y(u.textContent.replace(je, ''), u, c));
    }
    return e;
  }
  function Fe(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || w.cleanData(me(i)),
        i.parentNode && (n && oe(i) && ve(me(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ie, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c = e.cloneNode(!0),
        f = oe(e);
      if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
        for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
          (a = o[i]),
            'input' === (u = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type)
              ? (l.checked = a.checked)
              : ('input' !== u && 'textarea' !== u) || (l.defaultValue = a.defaultValue);
      if (t)
        if (n) for (o = o || me(e), s = s || me(c), i = 0, r = o.length; i < r; i++) qe(o[i], s[i]);
        else qe(e, c);
      return 0 < (s = me(c, 'script')).length && ve(s, !f && me(e, 'script')), c;
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (z(n)) {
          if ((t = n[X.expando])) {
            if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[X.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Fe(this, e, !0);
      },
      remove: function (e) {
        return Fe(this, e);
      },
      text: function (e) {
        return U(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return U(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !ke.test(e) && !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)), w(r[s])[t](n), a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Me = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i'),
    We = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(ie.join('|'), 'i');
  function Ue(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || We(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = w.style(e, t)),
        !p.pixelBoxStyles() &&
          Me.test(s) &&
          Be.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + '' : s
    );
  }
  function Ke(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (s = 12 === n(c.offsetWidth / 3)),
          re.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      o,
      s,
      a,
      l,
      u = i.createElement('div'),
      c = i.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (p.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      w.extend(p, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), s;
        },
      }));
  })();
  var $e = ['Webkit', 'Moz', 'ms'],
    Qe = i.createElement('div').style,
    Ve = {};
  function ze(e) {
    return (
      w.cssProps[e] ||
      Ve[e] ||
      (e in Qe
        ? e
        : (Ve[e] =
            (function (e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--; ) if ((e = $e[n] + t) in Qe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ge = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Je = { letterSpacing: '0', fontWeight: '400' };
  function Ze(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function et(e, t, n, i, r, o) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += w.css(e, n + ie[s], !0, r)),
        i
          ? ('content' === n && (l -= w.css(e, 'padding' + ie[s], !0, r)),
            'margin' !== n && (l -= w.css(e, 'border' + ie[s] + 'Width', !0, r)))
          : ((l += w.css(e, 'padding' + ie[s], !0, r)),
            'padding' !== n
              ? (l += w.css(e, 'border' + ie[s] + 'Width', !0, r))
              : (a += w.css(e, 'border' + ie[s] + 'Width', !0, r)));
    return (
      !i &&
        0 <= o &&
        (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0),
      l
    );
  }
  function tt(e, t, n) {
    var i = We(e),
      r = (!p.boxSizingReliable() || n) && 'border-box' === w.css(e, 'boxSizing', !1, i),
      o = r,
      s = Ue(e, t, i),
      a = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Me.test(s)) {
      if (!n) return s;
      s = 'auto';
    }
    return (
      ((!p.boxSizingReliable() && r) || 'auto' === s || (!parseFloat(s) && 'inline' === w.css(e, 'display', !1, i))) &&
        e.getClientRects().length &&
        ((r = 'border-box' === w.css(e, 'boxSizing', !1, i)), (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) + et(e, t, n || (r ? 'border' : 'content'), o, i, s) + 'px'
    );
  }
  function nt(e, t, n, i, r) {
    return new nt.prototype.init(e, t, n, i, r);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ue(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = V(t),
          l = Xe.test(t),
          u = e.style;
        if ((l || (t = ze(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n))
          return s && 'get' in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        'string' == (o = typeof n) && (r = ne.exec(n)) && r[1] && ((n = ue(e, t, r)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o || l || (n += (r && r[3]) || (w.cssNumber[a] ? '' : 'px')),
            p.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = V(t);
      return (
        Xe.test(t) || (t = ze(a)),
        (s = w.cssHooks[t] || w.cssHooks[a]) && 'get' in s && (r = s.get(e, !0, n)),
        void 0 === r && (r = Ue(e, t, i)),
        'normal' === r && t in Je && (r = Je[t]),
        '' === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
      );
    },
  }),
    w.each(['height', 'width'], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ye.test(w.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, i)
              : le(e, Ge, function () {
                  return tt(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = We(e),
            s = !p.scrollboxSize() && 'absolute' === o.position,
            a = (s || i) && 'border-box' === w.css(e, 'boxSizing', !1, o),
            l = i ? et(e, t, i, a, o) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, 'border', !1, o) - 0.5
              )),
            l && (r = ne.exec(n)) && 'px' !== (r[3] || 'px') && ((e.style[t] = n), (n = w.css(e, t))),
            Ze(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Ke(p.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ue(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              le(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
            r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        'margin' !== e && (w.cssHooks[e + t].set = Ze);
    }),
    w.fn.extend({
      css: function (e, t) {
        return U(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = We(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (w.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (w.fx = nt.prototype.init),
    (w.fx.step = {});
  var it,
    rt,
    ot,
    st,
    at = /^(?:toggle|show|hide)$/,
    lt = /queueHooks$/;
  function ut() {
    rt &&
      (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ut) : e.setTimeout(ut, w.fx.interval),
      w.fx.tick());
  }
  function ct() {
    return (
      e.setTimeout(function () {
        it = void 0;
      }),
      (it = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r['margin' + (n = ie[i])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function ht(e, t, n) {
    for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners['*']), o = 0, s = r.length; o < s; o++)
      if ((i = r[o].call(n, t, e))) return i;
  }
  function dt(e, t, n) {
    var i,
      r,
      o = 0,
      s = dt.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = it || ct(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            s = u.tweens.length;
          o < s;
          o++
        )
          u.tweens[o].run(i);
        return (
          a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: it || ct(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = w.cssHooks[i]) && ('expand' in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = dt.prefilters[o].call(u, e, c, u.opts)))
        return g(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return (
      w.map(c, ht, u),
      g(u.opts.start) && u.opts.start.call(e, u),
      u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (w.Animation = w.extend(dt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ['*'])) : (e = e.match(H));
      for (var n, i = 0, r = e.length; i < r; i++) (dt.tweeners[(n = e[i])] = dt.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = 'width' in t || 'height' in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && ae(e),
          m = X.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (s = w._queueHooks(e, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          h.always(function () {
            h.always(function () {
              s.unqueued--, w.queue(e, 'fx').length || s.empty.fire();
            });
          })),
        t))
          if (at.test((r = t[i]))) {
            if ((delete t[i], (o = o || 'toggle' === r), r === (g ? 'hide' : 'show'))) {
              if ('show' !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            d[i] = (m && m[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = X.get(e, 'display')),
            'none' === (c = w.css(e, 'display')) &&
              (u ? (c = u) : (fe([e], !0), (u = e.style.display || u), (c = w.css(e, 'display')), fe([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === w.css(e, 'float') &&
              (l ||
                (h.done(function () {
                  p.display = u;
                }),
                null == u && (u = 'none' === (c = p.display) ? '' : c)),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            h.always(function () {
              (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (m ? 'hidden' in m && (g = m.hidden) : (m = X.access(e, 'fxshow', { display: u })),
              o && (m.hidden = !g),
              g && fe([e], !0),
              h.done(function () {
                for (i in (g || fe([e]), X.remove(e, 'fxshow'), d)) w.style(e, i, d[i]);
              })),
              (l = ht(g ? m[i] : 0, i, h)),
              i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? w.extend({}, e)
          : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
      return (
        w.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration = i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae).css('opacity', 0).show().end().animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function () {
            var t = dt(this, w.extend({}, e), o);
            (r || X.get(this, 'finish')) && t.stop(!0);
          };
        return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              r = null != e && e + 'queueHooks',
              o = w.timers,
              s = X.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = X.get(this),
              i = n[e + 'queue'],
              r = n[e + 'queueHooks'],
              o = w.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; )
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, r) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, r);
      };
    }),
    w.each(
      {
        slideDown: ft('show'),
        slideUp: ft('hide'),
        slideToggle: ft('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (it = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), ut());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        this.queue((n = n || 'fx'), function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (ot = i.createElement('input')),
    (st = i.createElement('select').appendChild(i.createElement('option'))),
    (ot.type = 'checkbox'),
    (p.checkOn = '' !== ot.value),
    (p.optSelected = st.selected),
    ((ot = i.createElement('input')).value = 't'),
    (ot.type = 'radio'),
    (p.radioValue = 't' === ot.value);
  var pt,
    gt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return U(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : r && 'get' in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(H);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = gt[t] || w.find.attr;
      gt[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return i || ((o = gt[s]), (gt[s] = r), (r = null != n(e, t, i) ? s : null), (gt[s] = o)), r;
      };
    });
  var mt = /^(?:input|select|textarea|button)$/i,
    vt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(H) || []).join(' ');
  }
  function _t(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function bt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(H)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return U(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) || (r = w.propHooks[(t = w.propFix[t] || t)]),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && 'get' in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    p.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {},
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, _t(this)));
          });
        if ((t = bt(e)).length)
          for (; (n = this[l++]); )
            if (((r = _t(n)), (i = 1 === n.nodeType && ' ' + yt(r) + ' '))) {
              for (s = 0; (o = t[s++]); ) i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
              r !== (a = yt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, _t(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = bt(e)).length)
          for (; (n = this[l++]); )
            if (((r = _t(n)), (i = 1 === n.nodeType && ' ' + yt(r) + ' '))) {
              for (s = 0; (o = t[s++]); ) for (; -1 < i.indexOf(' ' + o + ' '); ) i = i.replace(' ' + o + ' ', ' ');
              r !== (a = yt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, _t(this), t), t);
            })
          : this.each(function () {
              var t, r, o, s;
              if (i)
                for (r = 0, o = w(this), s = bt(e); (t = s[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = _t(this)) && X.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute('class', t || !1 === e ? '' : X.get(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (' ' + yt(_t(n)) + ' ').indexOf(t)) return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = g(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, w(this).val()) : e)
                ? (r = '')
                : 'number' == typeof r
                ? (r += '')
                : Array.isArray(r) &&
                  (r = w.map(r, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, r, 'value')) ||
                (this.value = r));
          }))
        : r
        ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(r, 'value'))
          ? n
          : 'string' == typeof (n = r.value)
          ? n.replace(wt, '')
          : null == n
          ? ''
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, 'value');
            return null != t ? t : yt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = 'select-one' === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = w(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--; )
              ((i = r[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(['radio', 'checkbox'], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        p.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (p.focusin = 'onfocusin' in e);
  var Et = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, r, o) {
      var s,
        a,
        l,
        u,
        c,
        h,
        d,
        p,
        v = [r || i],
        y = f.call(t, 'type') ? t.type : t,
        _ = f.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = p = l = r = r || i),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Et.test(y + w.event.triggered) &&
          (-1 < y.indexOf('.') && ((y = (_ = y.split('.')).shift()), _.sort()),
          (c = y.indexOf(':') < 0 && 'on' + y),
          ((t = t[w.expando] ? t : new w.Event(y, 'object' == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = _.join('.')),
          (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + _.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[y] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!o && !d.noBubble && !m(r)) {
          for (Et.test((u = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
          l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = 1 < s ? u : d.bindType || y),
            (h = (X.get(a, 'events') || {})[t.type] && X.get(a, 'handle')) && h.apply(a, n),
            (h = c && a[c]) && h.apply && z(a) && ((t.result = h.apply(a, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !z(r) ||
            (c &&
              g(r[y]) &&
              !m(r) &&
              ((l = r[c]) && (r[c] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && p.addEventListener(y, Tt),
              r[y](),
              t.isPropagationStopped() && p.removeEventListener(y, Tt),
              (w.event.triggered = void 0),
              l && (r[c] = l))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    p.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = X.access(i, t);
            r || i.addEventListener(e, n, !0), X.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = X.access(i, t) - 1;
            r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0), X.remove(i, t));
          },
        };
      });
  var Ct = e.location,
    xt = Date.now(),
    St = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (t) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || w.error('Invalid XML: ' + t), n;
  };
  var Dt = /\[\]$/,
    At = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    It = /^(?:input|select|textarea|keygen)/i;
  function kt(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      w.each(t, function (t, r) {
        n || Dt.test(e) ? i(e, r) : kt(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, n, i);
      });
    else if (n || 'object' !== _(t)) i(e, t);
    else for (r in t) kt(e + '[' + r + ']', t[r], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = g(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) kt(n, e[n], t, r);
    return i.join('&');
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, 'elements');
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(':disabled') &&
              It.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !he.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, '\r\n') };
                })
              : { name: t.name, value: n.replace(At, '\r\n') };
          })
          .get();
      },
    });
  var Ot = /%20/g,
    jt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ht = /^(?:GET|HEAD)$/,
    qt = /^\/\//,
    Rt = {},
    Ft = {},
    Mt = '*/'.concat('*'),
    Wt = i.createElement('a');
  function Bt(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        r = 0,
        o = t.toLowerCase().match(H) || [];
      if (g(n))
        for (; (i = o[r++]); )
          '+' === i[0] ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function Ut(e, t, n, i) {
    var r = {},
      o = e === Ft;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var u = a(t, n, i);
          return 'string' != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), s(u), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r['*'] && s('*'));
  }
  function Kt(e, t) {
    var n,
      i,
      r = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (Wt.href = Ct.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ct.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Mt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': w.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Kt(Kt(e, w.ajaxSettings), t) : Kt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(Rt),
      ajaxTransport: Bt(Ft),
      ajax: function (t, n) {
        'object' == typeof t && ((n = t), (t = void 0));
        var r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p = w.ajaxSetup({}, (n = n || {})),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          y = w.Callbacks('once memory'),
          _ = p.statusCode || {},
          b = {},
          E = {},
          T = 'canceled',
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!a)
                  for (a = {}; (t = Pt.exec(s)); )
                    a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                t = a[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return null == c && ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e), (b[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) _[t] = [_[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return r && r.abort(t), x(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (p.url = ((t || p.url || Ct.href) + '').replace(qt, Ct.protocol + '//')),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || '*').toLowerCase().match(H) || ['']),
          null == p.crossDomain)
        ) {
          u = i.createElement('a');
          try {
            (u.href = p.url),
              (u.href = u.href),
              (p.crossDomain = Wt.protocol + '//' + Wt.host != u.protocol + '//' + u.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data && p.processData && 'string' != typeof p.data && (p.data = w.param(p.data, p.traditional)),
          Ut(Rt, p, n, C),
          c)
        )
          return C;
        for (h in ((f = w.event && p.global) && 0 == w.active++ && w.event.trigger('ajaxStart'),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Ht.test(p.type)),
        (o = p.url.replace(jt, '')),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (p.data = p.data.replace(Ot, '+'))
          : ((d = p.url.slice(o.length)),
            p.data &&
              (p.processData || 'string' == typeof p.data) &&
              ((o += (St.test(o) ? '&' : '?') + p.data), delete p.data),
            !1 === p.cache && ((o = o.replace(Lt, '$1')), (d = (St.test(o) ? '&' : '?') + '_=' + xt++ + d)),
            (p.url = o + d)),
        p.ifModified &&
          (w.lastModified[o] && C.setRequestHeader('If-Modified-Since', w.lastModified[o]),
          w.etag[o] && C.setRequestHeader('If-None-Match', w.etag[o])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
          C.setRequestHeader('Content-Type', p.contentType),
        C.setRequestHeader(
          'Accept',
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Mt + '; q=0.01' : '')
            : p.accepts['*']
        ),
        p.headers))
          C.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();
        if (((T = 'abort'), y.add(p.complete), C.done(p.success), C.fail(p.error), (r = Ut(Ft, p, n, C)))) {
          if (((C.readyState = 1), f && m.trigger('ajaxSend', [C, p]), c)) return C;
          p.async &&
            0 < p.timeout &&
            (l = e.setTimeout(function () {
              C.abort('timeout');
            }, p.timeout));
          try {
            (c = !1), r.send(b, x);
          } catch (t) {
            if (c) throw t;
            x(-1, t);
          }
        } else x(-1, 'No Transport');
        function x(t, n, i, a) {
          var u,
            h,
            d,
            b,
            E,
            T = n;
          c ||
            ((c = !0),
            l && e.clearTimeout(l),
            (r = void 0),
            (s = a || ''),
            (C.readyState = 0 < t ? 4 : 0),
            (u = (200 <= t && t < 300) || 304 === t),
            i &&
              (b = (function (e, t, n) {
                for (var i, r, o, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
                  l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + ' ' + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(p, C, i)),
            (b = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = l;
                  else if ('*' !== l && l !== o) {
                    if (!(s = u[l + ' ' + o] || u['* ' + o]))
                      for (r in u)
                        if ((a = r.split(' '))[1] === o && (s = u[l + ' ' + a[0]] || u['* ' + a[0]])) {
                          !0 === s ? (s = u[r]) : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return { state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + o };
                        }
                  }
              return { state: 'success', data: t };
            })(p, b, C, u)),
            u
              ? (p.ifModified &&
                  ((E = C.getResponseHeader('Last-Modified')) && (w.lastModified[o] = E),
                  (E = C.getResponseHeader('etag')) && (w.etag[o] = E)),
                204 === t || 'HEAD' === p.type
                  ? (T = 'nocontent')
                  : 304 === t
                  ? (T = 'notmodified')
                  : ((T = b.state), (h = b.data), (u = !(d = b.error))))
              : ((d = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ''),
            u ? v.resolveWith(g, [h, T, C]) : v.rejectWith(g, [C, T, d]),
            C.statusCode(_),
            (_ = void 0),
            f && m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [C, p, u ? h : d]),
            y.fireWith(g, [C, T]),
            f && (m.trigger('ajaxComplete', [C, p]), --w.active || w.event.trigger('ajaxStop')));
        }
        return C;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, 'script');
      },
    }),
    w.each(['get', 'post'], function (e, t) {
      w[t] = function (e, n, i, r) {
        return (
          g(n) && ((r = r || i), (i = n), (n = void 0)),
          w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e))
        );
      };
    }),
    (w._evalUrl = function (e, t) {
      return w.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var $t = { 0: 200, 1223: 204 },
    Qt = w.ajaxSettings.xhr();
  (p.cors = !!Qt && 'withCredentials' in Qt),
    (p.ajax = Qt = !!Qt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (p.cors || (Qt && !t.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = t.xhr();
            if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
            t.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest'),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === e
                    ? a.abort()
                    : 'error' === e
                    ? 'number' != typeof a.status
                      ? o(0, 'error')
                      : o(a.status, a.statusText)
                    : o(
                        $t[a.status] || a.status,
                        a.statusText,
                        'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    w.ajaxTransport('script', function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, o) {
            (t = w('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(), (n = null), e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Vt,
    zt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + '_' + xt++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter('json jsonp', function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (Yt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Yt.test(t.data) &&
              'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Yt, '$1' + r))
            : !1 !== t.jsonp && (t.url += (St.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
          (t.converters['script json'] = function () {
            return s || w.error(r + ' was not called'), s[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? w(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), zt.push(r)),
              s && g(o) && o(s[0]),
              (s = o = void 0);
          }),
          'script'
        );
    }),
    (p.createHTMLDocument =
      (((Vt = i.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
      2 === Vt.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (p.createHTMLDocument
              ? (((r = (t = i.implementation.createHTMLDocument('')).createElement('base')).href = i.location.href),
                t.head.appendChild(r))
              : (t = i)),
          (s = !n && []),
          (o = N.exec(e))
            ? [t.createElement(o[1])]
            : ((o = we([e], t, s)), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
      var r, o, s;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(' ');
      return (
        -1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
        g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (r = 'POST'),
        0 < s.length &&
          w
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments), s.html(i ? w('<div>').append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      w.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = w.css(e, 'position'),
          c = w(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (a = c.offset()),
          (o = w.css(e, 'top')),
          (l = w.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && -1 < (o + l).indexOf('auto')
            ? ((s = (i = c.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === w.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
              e && (e === n.body || e === n.documentElement) && 'static' === w.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
              (r.left += w.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - r.top - w.css(i, 'marginTop', !0), left: t.left - r.left - w.css(i, 'marginLeft', !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && 'static' === w.css(e, 'position'); ) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    w.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
      var n = 'pageYOffset' === t;
      w.fn[e] = function (i) {
        return U(
          this,
          function (e, i, r) {
            var o;
            if ((m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    w.each(['top', 'left'], function (e, t) {
      w.cssHooks[t] = Ke(p.pixelPosition, function (e, n) {
        if (n) return (n = Ue(e, t)), Me.test(n) ? w(e).position()[t] + 'px' : n;
      });
    }),
    w.each({ Height: 'height', Width: 'width' }, function (e, t) {
      w.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, i) {
        w.fn[i] = function (r, o) {
          var s = arguments.length && (n || 'boolean' != typeof r),
            a = n || (!0 === r || !0 === o ? 'margin' : 'border');
          return U(
            this,
            function (t, n, r) {
              var o;
              return m(t)
                ? 0 === i.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body['scroll' + e],
                    o['scroll' + e],
                    t.body['offset' + e],
                    o['offset' + e],
                    o['client' + e]
                  ))
                : void 0 === r
                ? w.css(t, n, a)
                : w.style(t, n, r, a);
            },
            t,
            s ? r : void 0,
            s
          );
        };
      });
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, i, r;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (i = o.call(arguments, 2)),
          ((r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)));
          }).guid = e.guid = e.guid || w.guid++),
          r
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = A),
    (w.isFunction = g),
    (w.isWindow = m),
    (w.camelCase = V),
    (w.type = _),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return w;
      });
  var Xt = e.jQuery,
    Gt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Xt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    'use strict';
    function e(e) {
      return e && '[object Function]' === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function n(e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function i(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var r = t(e);
      return /(auto|scroll|overlay)/.test(r.overflow + r.overflowY + r.overflowX) ? e : i(n(e));
    }
    function r(e) {
      return 11 === e ? K : 10 === e ? $ : K || $;
    }
    function o(e) {
      if (!e) return document.documentElement;
      for (var n = r(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling; )
        i = (e = e.nextElementSibling).offsetParent;
      var s = i && i.nodeName;
      return s && 'BODY' !== s && 'HTML' !== s
        ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(i.nodeName) && 'static' === t(i, 'position')
          ? o(i)
          : i
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function s(e) {
      return null === e.parentNode ? e : s(e.parentNode);
    }
    function a(e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        l = document.createRange();
      l.setStart(i, 0), l.setEnd(r, 0);
      var u = l.commonAncestorContainer;
      if ((e !== u && t !== u) || i.contains(r))
        return (function (e) {
          var t = e.nodeName;
          return 'BODY' !== t && ('HTML' === t || o(e.firstElementChild) === e);
        })(u)
          ? u
          : o(u);
      var c = s(e);
      return c.host ? a(c.host, t) : a(e, s(t).host);
    }
    function l(e) {
      var t =
          'top' === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top')
            ? 'scrollTop'
            : 'scrollLeft',
        n = e.nodeName;
      return 'BODY' === n || 'HTML' === n
        ? (e.ownerDocument.scrollingElement || e.ownerDocument.documentElement)[t]
        : e[t];
    }
    function u(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(t, 'top'),
        r = l(t, 'left'),
        o = n ? -1 : 1;
      return (e.top += i * o), (e.bottom += i * o), (e.left += r * o), (e.right += r * o), e;
    }
    function c(e, t) {
      var n = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == n ? 'Right' : 'Bottom';
      return parseFloat(e['border' + n + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
    }
    function f(e, t, n, i) {
      return R(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        r(10)
          ? parseInt(n['offset' + e]) +
              parseInt(i['margin' + ('Height' === e ? 'Top' : 'Left')]) +
              parseInt(i['margin' + ('Height' === e ? 'Bottom' : 'Right')])
          : 0
      );
    }
    function h(e) {
      var t = e.body,
        n = e.documentElement,
        i = r(10) && getComputedStyle(n);
      return { height: f('Height', t, n, i), width: f('Width', t, n, i) };
    }
    function d(e) {
      return Y({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function p(e) {
      var n = {};
      try {
        if (r(10)) {
          n = e.getBoundingClientRect();
          var i = l(e, 'top'),
            o = l(e, 'left');
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } else n = e.getBoundingClientRect();
      } catch (t) {}
      var s = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
        a = 'HTML' === e.nodeName ? h(e.ownerDocument) : {},
        u = e.offsetWidth - (a.width || e.clientWidth || s.right - s.left),
        f = e.offsetHeight - (a.height || e.clientHeight || s.bottom - s.top);
      if (u || f) {
        var p = t(e);
        (u -= c(p, 'x')), (f -= c(p, 'y')), (s.width -= u), (s.height -= f);
      }
      return d(s);
    }
    function g(e, n) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = r(10),
        a = 'HTML' === n.nodeName,
        l = p(e),
        c = p(n),
        f = i(e),
        h = t(n),
        g = parseFloat(h.borderTopWidth, 10),
        m = parseFloat(h.borderLeftWidth, 10);
      o && a && ((c.top = R(c.top, 0)), (c.left = R(c.left, 0)));
      var v = d({ top: l.top - c.top - g, left: l.left - c.left - m, width: l.width, height: l.height });
      if (((v.marginTop = 0), (v.marginLeft = 0), !s && a)) {
        var y = parseFloat(h.marginTop, 10),
          _ = parseFloat(h.marginLeft, 10);
        (v.top -= g - y),
          (v.bottom -= g - y),
          (v.left -= m - _),
          (v.right -= m - _),
          (v.marginTop = y),
          (v.marginLeft = _);
      }
      return (s && !o ? n.contains(f) : n === f && 'BODY' !== f.nodeName) && (v = u(v, n)), v;
    }
    function m(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = e.ownerDocument.documentElement,
        i = g(e, n),
        r = R(n.clientWidth, window.innerWidth || 0),
        o = R(n.clientHeight, window.innerHeight || 0),
        s = t ? 0 : l(n),
        a = t ? 0 : l(n, 'left');
      return d({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    }
    function v(e) {
      var i = e.nodeName;
      if ('BODY' === i || 'HTML' === i) return !1;
      if ('fixed' === t(e, 'position')) return !0;
      var r = n(e);
      return !!r && v(r);
    }
    function y(e) {
      if (!e || !e.parentElement || r()) return document.documentElement;
      for (var n = e.parentElement; n && 'none' === t(n, 'transform'); ) n = n.parentElement;
      return n || document.documentElement;
    }
    function _(e, t, r, o) {
      var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        l = { top: 0, left: 0 },
        u = s ? y(e) : a(e, t);
      if ('viewport' === o) l = m(u, s);
      else {
        var c;
        'scrollParent' === o
          ? 'BODY' === (c = i(n(t))).nodeName && (c = e.ownerDocument.documentElement)
          : (c = 'window' === o ? e.ownerDocument.documentElement : o);
        var f = g(c, u, s);
        if ('HTML' !== c.nodeName || v(u)) l = f;
        else {
          var d = h(e.ownerDocument),
            p = d.height,
            _ = d.width;
          (l.top += f.top - f.marginTop),
            (l.bottom = p + f.top),
            (l.left += f.left - f.marginLeft),
            (l.right = _ + f.left);
        }
      }
      var b = 'number' == typeof (r = r || 0);
      return (
        (l.left += b ? r : r.left || 0),
        (l.top += b ? r : r.top || 0),
        (l.right -= b ? r : r.right || 0),
        (l.bottom -= b ? r : r.bottom || 0),
        l
      );
    }
    function b(e) {
      return e.width * e.height;
    }
    function w(e, t, n, i, r) {
      var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf('auto')) return e;
      var s = _(n, i, o, r),
        a = {
          top: { width: s.width, height: t.top - s.top },
          right: { width: s.right - t.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - t.bottom },
          left: { width: t.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (e) {
            return Y({ key: e }, a[e], { area: b(a[e]) });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        u = l.filter(function (e) {
          return e.width >= n.clientWidth && e.height >= n.clientHeight;
        }),
        c = 0 < u.length ? u[0].key : l[0].key,
        f = e.split('-')[1];
      return c + (f ? '-' + f : '');
    }
    function E(e, t, n) {
      var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return g(n, i ? y(t) : a(t, n), i);
    }
    function T(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function C(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function x(e, t, n) {
      n = n.split('-')[0];
      var i = T(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ['right', 'left'].indexOf(n),
        s = o ? 'top' : 'left',
        a = o ? 'left' : 'top',
        l = o ? 'height' : 'width',
        u = o ? 'width' : 'height';
      return (r[s] = t[s] + t[l] / 2 - i[l] / 2), (r[a] = n === a ? t[a] - i[u] : t[C(a)]), r;
    }
    function S(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function D(t, n, i) {
      return (
        (void 0 === i
          ? t
          : t.slice(
              0,
              (function (e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function (e) {
                    return e[t] === n;
                  });
                var i = S(e, function (e) {
                  return e[t] === n;
                });
                return e.indexOf(i);
              })(t, 'name', i)
            )
        ).forEach(function (t) {
          t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var i = t.function || t.fn;
          t.enabled &&
            e(i) &&
            ((n.offsets.popper = d(n.offsets.popper)), (n.offsets.reference = d(n.offsets.reference)), (n = i(n, t)));
        }),
        n
      );
    }
    function A(e, t) {
      return e.some(function (e) {
        return e.enabled && e.name === t;
      });
    }
    function N(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0;
        i < t.length;
        i++
      ) {
        var r = t[i],
          o = r ? '' + r + n : e;
        if (void 0 !== document.body.style[o]) return o;
      }
      return null;
    }
    function I(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function k(e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function O(e, t) {
      Object.keys(t).forEach(function (n) {
        var i = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && k(t[n]) && (i = 'px'),
          (e.style[n] = t[n] + i);
      });
    }
    function j(e, t, n) {
      var i = S(e, function (e) {
          return e.name === t;
        }),
        r =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!r) {
        var o = '`' + t + '`';
        console.warn(
          '`' +
            n +
            '` modifier is required by ' +
            o +
            ' modifier in order to work, be sure to include it before ' +
            o +
            '!'
        );
      }
      return r;
    }
    function L(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = J.indexOf(e),
        i = J.slice(n + 1).concat(J.slice(0, n));
      return t ? i.reverse() : i;
    }
    for (
      var P = Math.min,
        H = Math.floor,
        q = Math.round,
        R = Math.max,
        F = 'undefined' != typeof window && 'undefined' != typeof document,
        M = ['Edge', 'Trident', 'Firefox'],
        W = 0,
        B = 0;
      B < M.length;
      B += 1
    )
      if (F && 0 <= navigator.userAgent.indexOf(M[B])) {
        W = 1;
        break;
      }
    var U =
        F && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, W));
              };
            },
      K = F && !(!window.MSInputMethodContext || !document.documentMode),
      $ = F && /MSIE 10/.test(navigator.userAgent),
      Q = function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      },
      V = (function () {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      z = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      },
      Y =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      X = F && /Firefox/i.test(navigator.userAgent),
      G = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      J = G.slice(3),
      Z = (function () {
        function t(n, i) {
          var r = this,
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          Q(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = U(this.update.bind(this))),
            (this.options = Y({}, t.Defaults, o)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(Y({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
              r.options.modifiers[e] = Y({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return Y({ name: e }, r.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          V(t, [
            {
              key: 'update',
              value: function () {
                return function () {
                  if (!this.state.isDestroyed) {
                    var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                    (e.offsets.reference = E(this.state, this.popper, this.reference, this.options.positionFixed)),
                      (e.placement = w(
                        this.options.placement,
                        e.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (e.originalPlacement = e.placement),
                      (e.positionFixed = this.options.positionFixed),
                      (e.offsets.popper = x(this.popper, e.offsets.reference, e.placement)),
                      (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
                      (e = D(this.modifiers, e)),
                      this.state.isCreated
                        ? this.options.onUpdate(e)
                        : ((this.state.isCreated = !0), this.options.onCreate(e));
                  }
                }.call(this);
              },
            },
            {
              key: 'destroy',
              value: function () {
                return function () {
                  return (
                    (this.state.isDestroyed = !0),
                    A(this.modifiers, 'applyStyle') &&
                      (this.popper.removeAttribute('x-placement'),
                      (this.popper.style.position = ''),
                      (this.popper.style.top = ''),
                      (this.popper.style.left = ''),
                      (this.popper.style.right = ''),
                      (this.popper.style.bottom = ''),
                      (this.popper.style.willChange = ''),
                      (this.popper.style[N('transform')] = '')),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                  );
                }.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return function () {
                  this.state.eventsEnabled ||
                    (this.state = (function (e, t, n, r) {
                      (n.updateBound = r), I(e).addEventListener('resize', n.updateBound, { passive: !0 });
                      var o = i(e);
                      return (
                        (function e(t, n, r, o) {
                          var s = 'BODY' === t.nodeName,
                            a = s ? t.ownerDocument.defaultView : t;
                          a.addEventListener(n, r, { passive: !0 }), s || e(i(a.parentNode), n, r, o), o.push(a);
                        })(o, 'scroll', n.updateBound, n.scrollParents),
                        (n.scrollElement = o),
                        (n.eventsEnabled = !0),
                        n
                      );
                    })(this.reference, 0, this.state, this.scheduleUpdate));
                }.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return function () {
                  this.state.eventsEnabled &&
                    (cancelAnimationFrame(this.scheduleUpdate),
                    (this.state = (function (e, t) {
                      return (
                        I(e).removeEventListener('resize', t.updateBound),
                        t.scrollParents.forEach(function (e) {
                          e.removeEventListener('scroll', t.updateBound);
                        }),
                        (t.updateBound = null),
                        (t.scrollParents = []),
                        (t.scrollElement = null),
                        (t.eventsEnabled = !1),
                        t
                      );
                    })(this.reference, this.state)));
                }.call(this);
              },
            },
          ]),
          t
        );
      })();
    return (
      (Z.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (Z.placements = G),
      (Z.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = t.split('-')[1];
              if (i) {
                var r = e.offsets,
                  o = r.reference,
                  s = r.popper,
                  a = -1 !== ['bottom', 'top'].indexOf(n),
                  l = a ? 'left' : 'top',
                  u = a ? 'width' : 'height',
                  c = { start: z({}, l, o[l]), end: z({}, l, o[l] + o[u] - s[u]) };
                e.offsets.popper = Y({}, s, c[i]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n,
                i = t.offset,
                r = e.offsets,
                o = r.popper,
                s = r.reference,
                a = e.placement.split('-')[0];
              return (
                (n = k(+i)
                  ? [+i, 0]
                  : (function (e, t, n, i) {
                      var r = [0, 0],
                        o = -1 !== ['right', 'left'].indexOf(i),
                        s = e.split(/(\+|\-)/).map(function (e) {
                          return e.trim();
                        }),
                        a = s.indexOf(
                          S(s, function (e) {
                            return -1 !== e.search(/,|\s/);
                          })
                        );
                      s[a] &&
                        -1 === s[a].indexOf(',') &&
                        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                      var l = /\s*,\s*|\s+/,
                        u =
                          -1 === a
                            ? [s]
                            : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
                      return (
                        (u = u.map(function (e, i) {
                          var r = (1 === i ? !o : o) ? 'height' : 'width',
                            s = !1;
                          return e
                            .reduce(function (e, t) {
                              return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
                                ? ((e[e.length - 1] = t), (s = !0), e)
                                : s
                                ? ((e[e.length - 1] += t), (s = !1), e)
                                : e.concat(t);
                            }, [])
                            .map(function (e) {
                              return (function (e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                  o = +r[1],
                                  s = r[2];
                                if (!o) return e;
                                if (0 === s.indexOf('%')) {
                                  var a;
                                  switch (s) {
                                    case '%p':
                                      a = n;
                                      break;
                                    case '%':
                                    case '%r':
                                    default:
                                      a = i;
                                  }
                                  return (d(a)[t] / 100) * o;
                                }
                                return 'vh' === s || 'vw' === s
                                  ? (('vh' === s
                                      ? R(document.documentElement.clientHeight, window.innerHeight || 0)
                                      : R(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                      100) *
                                      o
                                  : o;
                              })(e, r, t, n);
                            });
                        })).forEach(function (e, t) {
                          e.forEach(function (n, i) {
                            k(n) && (r[t] += n * ('-' === e[i - 1] ? -1 : 1));
                          });
                        }),
                        r
                      );
                    })(i, o, s, a)),
                'left' === a
                  ? ((o.top += n[0]), (o.left -= n[1]))
                  : 'right' === a
                  ? ((o.top += n[0]), (o.left += n[1]))
                  : 'top' === a
                  ? ((o.left += n[0]), (o.top -= n[1]))
                  : 'bottom' === a && ((o.left += n[0]), (o.top += n[1])),
                (e.popper = o),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || o(e.instance.popper);
              e.instance.reference === n && (n = o(n));
              var i = N('transform'),
                r = e.instance.popper.style,
                s = r.top,
                a = r.left,
                l = r[i];
              (r.top = ''), (r.left = ''), (r[i] = '');
              var u = _(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
              (r.top = s), (r.left = a), (r[i] = l), (t.boundaries = u);
              var c = e.offsets.popper,
                f = {
                  primary: function (e) {
                    var n = c[e];
                    return c[e] < u[e] && !t.escapeWithReference && (n = R(c[e], u[e])), z({}, e, n);
                  },
                  secondary: function (e) {
                    var n = 'right' === e ? 'left' : 'top',
                      i = c[n];
                    return (
                      c[e] > u[e] &&
                        !t.escapeWithReference &&
                        (i = P(c[n], u[e] - ('right' === e ? c.width : c.height))),
                      z({}, n, i)
                    );
                  },
                };
              return (
                t.priority.forEach(function (e) {
                  var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                  c = Y({}, c, f[t](e));
                }),
                (e.offsets.popper = c),
                e
              );
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                r = e.placement.split('-')[0],
                o = H,
                s = -1 !== ['top', 'bottom'].indexOf(r),
                a = s ? 'right' : 'bottom',
                l = s ? 'left' : 'top',
                u = s ? 'width' : 'height';
              return (
                n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
                n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, n) {
              var i;
              if (!j(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
              var r = n.element;
              if ('string' == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e;
              } else if (!e.instance.popper.contains(r))
                return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
              var o = e.placement.split('-')[0],
                s = e.offsets,
                a = s.popper,
                l = s.reference,
                u = -1 !== ['left', 'right'].indexOf(o),
                c = u ? 'height' : 'width',
                f = u ? 'Top' : 'Left',
                h = f.toLowerCase(),
                p = u ? 'left' : 'top',
                g = u ? 'bottom' : 'right',
                m = T(r)[c];
              l[g] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[g] - m)),
                l[h] + m > a[g] && (e.offsets.popper[h] += l[h] + m - a[g]),
                (e.offsets.popper = d(e.offsets.popper));
              var v = l[h] + l[c] / 2 - m / 2,
                y = t(e.instance.popper),
                _ = parseFloat(y['margin' + f], 10),
                b = parseFloat(y['border' + f + 'Width'], 10),
                w = v - e.offsets.popper[h] - _ - b;
              return (
                (w = R(P(a[c] - m, w), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow = (z((i = {}), h, q(w)), z(i, p, ''), i)),
                e
              );
            },
            element: '[x-arrow]',
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (A(e.instance.modifiers, 'inner')) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                i = e.placement.split('-')[0],
                r = C(i),
                o = e.placement.split('-')[1] || '',
                s = [];
              switch (t.behavior) {
                case 'flip':
                  s = [i, r];
                  break;
                case 'clockwise':
                  s = L(i);
                  break;
                case 'counterclockwise':
                  s = L(i, !0);
                  break;
                default:
                  s = t.behavior;
              }
              return (
                s.forEach(function (a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  (i = e.placement.split('-')[0]), (r = C(i));
                  var u = e.offsets.popper,
                    c = e.offsets.reference,
                    f = H,
                    h =
                      ('left' === i && f(u.right) > f(c.left)) ||
                      ('right' === i && f(u.left) < f(c.right)) ||
                      ('top' === i && f(u.bottom) > f(c.top)) ||
                      ('bottom' === i && f(u.top) < f(c.bottom)),
                    d = f(u.left) < f(n.left),
                    p = f(u.right) > f(n.right),
                    g = f(u.top) < f(n.top),
                    m = f(u.bottom) > f(n.bottom),
                    v = ('left' === i && d) || ('right' === i && p) || ('top' === i && g) || ('bottom' === i && m),
                    y = -1 !== ['top', 'bottom'].indexOf(i),
                    _ =
                      (!!t.flipVariations &&
                        ((y && 'start' === o && d) ||
                          (y && 'end' === o && p) ||
                          (!y && 'start' === o && g) ||
                          (!y && 'end' === o && m))) ||
                      (!!t.flipVariationsByContent &&
                        ((y && 'start' === o && p) ||
                          (y && 'end' === o && d) ||
                          (!y && 'start' === o && m) ||
                          (!y && 'end' === o && g)));
                  (h || v || _) &&
                    ((e.flipped = !0),
                    (h || v) && (i = s[l + 1]),
                    _ && (o = 'end' === o ? 'start' : 'start' === o ? 'end' : o),
                    (e.placement = i + (o ? '-' + o : '')),
                    (e.offsets.popper = Y(
                      {},
                      e.offsets.popper,
                      x(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = D(e.instance.modifiers, e, 'flip')));
                }),
                e
              );
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = e.offsets,
                r = i.popper,
                o = i.reference,
                s = -1 !== ['left', 'right'].indexOf(n),
                a = -1 === ['top', 'left'].indexOf(n);
              return (
                (r[s ? 'left' : 'top'] = o[n] - (a ? r[s ? 'width' : 'height'] : 0)),
                (e.placement = C(t)),
                (e.offsets.popper = d(r)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!j(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
              var t = e.offsets.reference,
                n = S(e.instance.modifiers, function (e) {
                  return 'preventOverflow' === e.name;
                }).boundaries;
              if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                r = e.offsets.popper,
                s = S(e.instance.modifiers, function (e) {
                  return 'applyStyle' === e.name;
                }).gpuAcceleration;
              void 0 !== s &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
              var a,
                l,
                u = void 0 === s ? t.gpuAcceleration : s,
                c = o(e.instance.popper),
                f = p(c),
                h = { position: r.position },
                d = (function (e, t) {
                  var n = e.offsets,
                    i = n.popper,
                    r = q,
                    o = function (e) {
                      return e;
                    },
                    s = r(n.reference.width),
                    a = r(i.width),
                    l = -1 !== ['left', 'right'].indexOf(e.placement),
                    u = -1 !== e.placement.indexOf('-'),
                    c = t ? (l || u || s % 2 == a % 2 ? r : H) : o,
                    f = t ? r : o;
                  return {
                    left: c(1 == s % 2 && 1 == a % 2 && !u && t ? i.left - 1 : i.left),
                    top: f(i.top),
                    bottom: f(i.bottom),
                    right: c(i.right),
                  };
                })(e, 2 > window.devicePixelRatio || !X),
                g = 'bottom' === n ? 'top' : 'bottom',
                m = 'right' === i ? 'left' : 'right',
                v = N('transform');
              if (
                ((l =
                  'bottom' == g ? ('HTML' === c.nodeName ? -c.clientHeight + d.bottom : -f.height + d.bottom) : d.top),
                (a = 'right' == m ? ('HTML' === c.nodeName ? -c.clientWidth + d.right : -f.width + d.right) : d.left),
                u && v)
              )
                (h[v] = 'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                  (h[g] = 0),
                  (h[m] = 0),
                  (h.willChange = 'transform');
              else {
                var y = 'right' == m ? -1 : 1;
                (h[g] = l * ('bottom' == g ? -1 : 1)), (h[m] = a * y), (h.willChange = g + ', ' + m);
              }
              return (
                (e.attributes = Y({}, { 'x-placement': e.placement }, e.attributes)),
                (e.styles = Y({}, h, e.styles)),
                (e.arrowStyles = Y({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                O(e.instance.popper, e.styles),
                (function (e, t) {
                  Object.keys(t).forEach(function (n) {
                    !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
                  });
                })(e.instance.popper, e.attributes),
                e.arrowElement && Object.keys(e.arrowStyles).length && O(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, i, r) {
              var o = E(r, t, e, n.positionFixed),
                s = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return t.setAttribute('x-placement', s), O(t, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      Z
    );
  }),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          i.forEach(function (t) {
            var i, r, o;
            (o = n[(r = t)]),
              r in (i = e)
                ? Object.defineProperty(i, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                : (i[r] = o);
          });
      }
      return e;
    }
    (t = t && t.hasOwnProperty('default') ? t.default : t), (n = n && n.hasOwnProperty('default') ? n.default : n);
    var s = 'transitionend',
      a = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function (e) {
          for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute('data-target');
          if (!t || '#' === t) {
            var n = e.getAttribute('href');
            t = n && '#' !== n ? n.trim() : '';
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var n = t(e).css('transition-duration'),
            i = t(e).css('transition-delay'),
            r = parseFloat(n),
            o = parseFloat(i);
          return r || o ? ((n = n.split(',')[0]), (i = i.split(',')[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
          t(e).trigger(s);
        },
        supportsTransitionEnd: function () {
          return Boolean(s);
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                o = t[i],
                s =
                  o && a.isElement(o)
                    ? 'element'
                    : {}.toString
                        .call(o)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(r).test(s))
                throw new Error(
                  e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".'
                );
            }
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ('function' != typeof e.getRootNode)
            return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        },
      };
    (t.fn.emulateTransitionEnd = function (e) {
      var n = this,
        i = !1;
      return (
        t(this).one(a.TRANSITION_END, function () {
          i = !0;
        }),
        setTimeout(function () {
          i || a.triggerTransitionEnd(n);
        }, e),
        this
      );
    }),
      (t.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function (e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        },
      });
    var l = 'alert',
      u = 'bs.alert',
      c = '.' + u,
      f = t.fn[l],
      h = { CLOSE: 'close' + c, CLOSED: 'closed' + c, CLICK_DATA_API: 'click' + c + '.data-api' },
      d = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
          }),
          (n.dispose = function () {
            t.removeData(this._element, u), (this._element = null);
          }),
          (n._getRootElement = function (e) {
            var n = a.getSelectorFromElement(e),
              i = !1;
            return n && (i = document.querySelector(n)), i || (i = t(e).closest('.alert')[0]), i;
          }),
          (n._triggerCloseEvent = function (e) {
            var n = t.Event(h.CLOSE);
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function (e) {
            var n = this;
            if ((t(e).removeClass('show'), t(e).hasClass('fade'))) {
              var i = a.getTransitionDurationFromElement(e);
              t(e)
                .one(a.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function (e) {
            t(e).detach().trigger(h.CLOSED).remove();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data(u);
              r || ((r = new e(this)), i.data(u, r)), 'close' === n && r[n](this);
            });
          }),
          (e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d())),
      (t.fn[l] = d._jQueryInterface),
      (t.fn[l].Constructor = d),
      (t.fn[l].noConflict = function () {
        return (t.fn[l] = f), d._jQueryInterface;
      });
    var p = 'button',
      g = 'bs.button',
      m = '.' + g,
      v = '.data-api',
      y = t.fn[p],
      _ = 'active',
      b = '[data-toggle^="button"]',
      w = '.btn',
      E = { CLICK_DATA_API: 'click' + m + v, FOCUS_BLUR_DATA_API: 'focus' + m + v + ' blur' + m + v },
      T = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            var e = !0,
              n = !0,
              i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var r = this._element.querySelector('input:not([type="hidden"])');
              if (r) {
                if ('radio' === r.type)
                  if (r.checked && this._element.classList.contains(_)) e = !1;
                  else {
                    var o = i.querySelector('.active');
                    o && t(o).removeClass(_);
                  }
                if (e) {
                  if (
                    r.hasAttribute('disabled') ||
                    i.hasAttribute('disabled') ||
                    r.classList.contains('disabled') ||
                    i.classList.contains('disabled')
                  )
                    return;
                  (r.checked = !this._element.classList.contains(_)), t(r).trigger('change');
                }
                r.focus(), (n = !1);
              }
            }
            n && this._element.setAttribute('aria-pressed', !this._element.classList.contains(_)),
              e && t(this._element).toggleClass(_);
          }),
          (n.dispose = function () {
            t.removeData(this._element, g), (this._element = null);
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(g);
              i || ((i = new e(this)), t(this).data(g, i)), 'toggle' === n && i[n]();
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(E.CLICK_DATA_API, b, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass('btn') || (n = t(n).closest(w)), T._jQueryInterface.call(t(n), 'toggle');
      })
      .on(E.FOCUS_BLUR_DATA_API, b, function (e) {
        var n = t(e.target).closest(w)[0];
        t(n).toggleClass('focus', /^focus(in)?$/.test(e.type));
      }),
      (t.fn[p] = T._jQueryInterface),
      (t.fn[p].Constructor = T),
      (t.fn[p].noConflict = function () {
        return (t.fn[p] = y), T._jQueryInterface;
      });
    var C = 'carousel',
      x = 'bs.carousel',
      S = '.' + x,
      D = '.data-api',
      A = t.fn[C],
      N = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
      I = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean',
      },
      k = 'next',
      O = 'prev',
      j = {
        SLIDE: 'slide' + S,
        SLID: 'slid' + S,
        KEYDOWN: 'keydown' + S,
        MOUSEENTER: 'mouseenter' + S,
        MOUSELEAVE: 'mouseleave' + S,
        TOUCHSTART: 'touchstart' + S,
        TOUCHMOVE: 'touchmove' + S,
        TOUCHEND: 'touchend' + S,
        POINTERDOWN: 'pointerdown' + S,
        POINTERUP: 'pointerup' + S,
        DRAG_START: 'dragstart' + S,
        LOAD_DATA_API: 'load' + S + D,
        CLICK_DATA_API: 'click' + S + D,
      },
      L = 'active',
      P = '.active.carousel-item',
      H = '.carousel-indicators',
      q = { TOUCH: 'touch', PEN: 'pen' },
      R = (function () {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(H)),
            (this._touchSupported = 'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
            this._addEventListeners();
        }
        var n = e.prototype;
        return (
          (n.next = function () {
            this._isSliding || this._slide(k);
          }),
          (n.nextWhenVisible = function () {
            !document.hidden &&
              t(this._element).is(':visible') &&
              'hidden' !== t(this._element).css('visibility') &&
              this.next();
          }),
          (n.prev = function () {
            this._isSliding || this._slide(O);
          }),
          (n.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector('.carousel-item-next, .carousel-item-prev') &&
                (a.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function (e) {
            var n = this;
            this._activeElement = this._element.querySelector(P);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one(j.SLID, function () {
                  return n.to(e);
                });
              else {
                if (i === e) return this.pause(), void this.cycle();
                this._slide(i < e ? k : O, this._items[e]);
              }
          }),
          (n.dispose = function () {
            t(this._element).off(S),
              t.removeData(this._element, x),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function (e) {
            return (e = o({}, N, e)), a.typeCheckConfig(C, e, I), e;
          }),
          (n._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              0 < t && this.prev(), t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              t(this._element).on(j.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              'hover' === this._config.pause &&
                t(this._element)
                  .on(j.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(j.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var n = function (t) {
                  e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function (t) {
                  e._pointerEvent &&
                    q[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    'hover' === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll('.carousel-item img')).on(j.DRAG_START, function (e) {
                return e.preventDefault();
              }),
                this._pointerEvent
                  ? (t(this._element).on(j.POINTERDOWN, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(j.POINTERUP, function (e) {
                      return i(e);
                    }),
                    this._element.classList.add('pointer-event'))
                  : (t(this._element).on(j.TOUCHSTART, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(j.TOUCHMOVE, function (t) {
                      var n;
                      e.touchDeltaX =
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length
                          ? 0
                          : n.originalEvent.touches[0].clientX - e.touchStartX;
                    }),
                    t(this._element).on(j.TOUCHEND, function (e) {
                      return i(e);
                    }));
            }
          }),
          (n._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function (e) {
            return (
              (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll('.carousel-item')) : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function (e, t) {
            var n = e === k,
              i = e === O,
              r = this._getItemIndex(t);
            if (((i && 0 === r) || (n && r === this._items.length - 1)) && !this._config.wrap) return t;
            var o = (r + (e === O ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o];
          }),
          (n._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              r = this._getItemIndex(this._element.querySelector(P)),
              o = t.Event(j.SLIDE, { relatedTarget: e, direction: n, from: r, to: i });
            return t(this._element).trigger(o), o;
          }),
          (n._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll('.active'));
              t(n).removeClass(L);
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass(L);
            }
          }),
          (n._slide = function (e, n) {
            var i,
              r,
              o,
              s = this,
              l = this._element.querySelector(P),
              u = this._getItemIndex(l),
              c = n || (l && this._getItemByDirection(e, l)),
              f = this._getItemIndex(c),
              h = Boolean(this._interval);
            if (
              ((o =
                e === k
                  ? ((i = 'carousel-item-left'), (r = 'carousel-item-next'), 'left')
                  : ((i = 'carousel-item-right'), (r = 'carousel-item-prev'), 'right')),
              c && t(c).hasClass(L))
            )
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
              (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(c);
              var d = t.Event(j.SLID, { relatedTarget: c, direction: o, from: u, to: f });
              if (t(this._element).hasClass('slide')) {
                t(c).addClass(r), a.reflow(c), t(l).addClass(i), t(c).addClass(i);
                var p = parseInt(c.getAttribute('data-interval'), 10);
                this._config.interval = p
                  ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), p)
                  : this._config.defaultInterval || this._config.interval;
                var g = a.getTransitionDurationFromElement(l);
                t(l)
                  .one(a.TRANSITION_END, function () {
                    t(c)
                      .removeClass(i + ' ' + r)
                      .addClass(L),
                      t(l).removeClass(L + ' ' + r + ' ' + i),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return t(s._element).trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else t(l).removeClass(L), t(c).addClass(L), (this._isSliding = !1), t(this._element).trigger(d);
              h && this.cycle();
            }
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(x),
                r = o({}, N, t(this).data());
              'object' == typeof n && (r = o({}, r, n));
              var s = 'string' == typeof n ? n : r.slide;
              if ((i || ((i = new e(this, r)), t(this).data(x, i)), 'number' == typeof n)) i.to(n);
              else if ('string' == typeof s) {
                if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                i[s]();
              } else r.interval && r.ride && (i.pause(), i.cycle());
            });
          }),
          (e._dataApiClickHandler = function (n) {
            var i = a.getSelectorFromElement(this);
            if (i) {
              var r = t(i)[0];
              if (r && t(r).hasClass('carousel')) {
                var s = o({}, t(r).data(), t(this).data()),
                  l = this.getAttribute('data-slide-to');
                l && (s.interval = !1), e._jQueryInterface.call(t(r), s), l && t(r).data(x).to(l), n.preventDefault();
              }
            }
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return N;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(j.CLICK_DATA_API, '[data-slide], [data-slide-to]', R._dataApiClickHandler),
      t(window).on(j.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length;
          n < i;
          n++
        ) {
          var r = t(e[n]);
          R._jQueryInterface.call(r, r.data());
        }
      }),
      (t.fn[C] = R._jQueryInterface),
      (t.fn[C].Constructor = R),
      (t.fn[C].noConflict = function () {
        return (t.fn[C] = A), R._jQueryInterface;
      });
    var F = 'collapse',
      M = 'bs.collapse',
      W = '.' + M,
      B = t.fn[F],
      U = { toggle: !0, parent: '' },
      K = { toggle: 'boolean', parent: '(string|element)' },
      $ = {
        SHOW: 'show' + W,
        SHOWN: 'shown' + W,
        HIDE: 'hide' + W,
        HIDDEN: 'hidden' + W,
        CLICK_DATA_API: 'click' + W + '.data-api',
      },
      Q = 'show',
      V = 'collapse',
      z = 'collapsing',
      Y = 'collapsed',
      X = '[data-toggle="collapse"]',
      G = (function () {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'
              )
            ));
          for (var n = [].slice.call(document.querySelectorAll(X)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
              s = a.getSelectorFromElement(o),
              l = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                return t === e;
              });
            null !== s && 0 < l.length && ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            t(this._element).hasClass(Q) ? this.hide() : this.show();
          }),
          (n.show = function () {
            var n,
              i,
              r = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass(Q) ||
                (this._parent &&
                  0 ===
                    (n = [].slice.call(this._parent.querySelectorAll('.show, .collapsing')).filter(function (e) {
                      return 'string' == typeof r._config.parent
                        ? e.getAttribute('data-parent') === r._config.parent
                        : e.classList.contains(V);
                    })).length &&
                  (n = null),
                n && (i = t(n).not(this._selector).data(M)) && i._isTransitioning)
              )
            ) {
              var o = t.Event($.SHOW);
              if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                n && (e._jQueryInterface.call(t(n).not(this._selector), 'hide'), i || t(n).data(M, null));
                var s = this._getDimension();
                t(this._element).removeClass(V).addClass(z),
                  (this._element.style[s] = 0),
                  this._triggerArray.length && t(this._triggerArray).removeClass(Y).attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var l = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                  u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function () {
                    t(r._element).removeClass(z).addClass(V).addClass(Q),
                      (r._element.style[s] = ''),
                      r.setTransitioning(!1),
                      t(r._element).trigger($.SHOWN);
                  })
                  .emulateTransitionEnd(u),
                  (this._element.style[s] = this._element[l] + 'px');
              }
            }
          }),
          (n.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(Q)) {
              var n = t.Event($.HIDE);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension();
                (this._element.style[i] = this._element.getBoundingClientRect()[i] + 'px'),
                  a.reflow(this._element),
                  t(this._element).addClass(z).removeClass(V).removeClass(Q);
                var r = this._triggerArray.length;
                if (0 < r)
                  for (var o = 0; o < r; o++) {
                    var s = this._triggerArray[o],
                      l = a.getSelectorFromElement(s);
                    null !== l &&
                      (t([].slice.call(document.querySelectorAll(l))).hasClass(Q) ||
                        t(s).addClass(Y).attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = '');
                var u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function () {
                    e.setTransitioning(!1), t(e._element).removeClass(z).addClass(V).trigger($.HIDDEN);
                  })
                  .emulateTransitionEnd(u);
              }
            }
          }),
          (n.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function () {
            t.removeData(this._element, M),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function (e) {
            return ((e = o({}, U, e)).toggle = Boolean(e.toggle)), a.typeCheckConfig(F, e, K), e;
          }),
          (n._getDimension = function () {
            return t(this._element).hasClass('width') ? 'width' : 'height';
          }),
          (n._getParent = function () {
            var n,
              i = this;
            a.isElement(this._config.parent)
              ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            var r = [].slice.call(
              n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]')
            );
            return (
              t(r).each(function (t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function (e, n) {
            var i = t(e).hasClass(Q);
            n.length && t(n).toggleClass(Y, !i).attr('aria-expanded', i);
          }),
          (e._getTargetFromElement = function (e) {
            var t = a.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data(M),
                s = o({}, U, i.data(), 'object' == typeof n && n ? n : {});
              if (
                (!r && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                r || ((r = new e(this, s)), i.data(M, r)),
                'string' == typeof n)
              ) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return U;
              },
            },
          ]),
          e
        );
      })();
    t(document).on($.CLICK_DATA_API, X, function (e) {
      'A' === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = a.getSelectorFromElement(this),
        r = [].slice.call(document.querySelectorAll(i));
      t(r).each(function () {
        var e = t(this),
          i = e.data(M) ? 'toggle' : n.data();
        G._jQueryInterface.call(e, i);
      });
    }),
      (t.fn[F] = G._jQueryInterface),
      (t.fn[F].Constructor = G),
      (t.fn[F].noConflict = function () {
        return (t.fn[F] = B), G._jQueryInterface;
      });
    var J = 'dropdown',
      Z = 'bs.dropdown',
      ee = '.' + Z,
      te = '.data-api',
      ne = t.fn[J],
      ie = new RegExp('38|40|27'),
      re = {
        HIDE: 'hide' + ee,
        HIDDEN: 'hidden' + ee,
        SHOW: 'show' + ee,
        SHOWN: 'shown' + ee,
        CLICK: 'click' + ee,
        CLICK_DATA_API: 'click' + ee + te,
        KEYDOWN_DATA_API: 'keydown' + ee + te,
        KEYUP_DATA_API: 'keyup' + ee + te,
      },
      oe = 'disabled',
      se = 'show',
      ae = 'dropdown-menu-right',
      le = '[data-toggle="dropdown"]',
      ue = '.dropdown-menu',
      ce = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' },
      fe = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
      },
      he = (function () {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var i = e.prototype;
        return (
          (i.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(oe)) {
              var i = e._getParentFromElement(this._element),
                r = t(this._menu).hasClass(se);
              if ((e._clearMenus(), !r)) {
                var o = { relatedTarget: this._element },
                  s = t.Event(re.SHOW, o);
                if ((t(i).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var l = this._element;
                    'parent' === this._config.reference
                      ? (l = i)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary && t(i).addClass('position-static'),
                      (this._popper = new n(l, this._menu, this._getPopperConfig()));
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === t(i).closest('.navbar-nav').length &&
                    t(document.body).children().on('mouseover', null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    t(this._menu).toggleClass(se),
                    t(i).toggleClass(se).trigger(t.Event(re.SHOWN, o));
                }
              }
            }
          }),
          (i.show = function () {
            if (!(this._element.disabled || t(this._element).hasClass(oe) || t(this._menu).hasClass(se))) {
              var n = { relatedTarget: this._element },
                i = t.Event(re.SHOW, n),
                r = e._getParentFromElement(this._element);
              t(r).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se), t(r).toggleClass(se).trigger(t.Event(re.SHOWN, n)));
            }
          }),
          (i.hide = function () {
            if (!this._element.disabled && !t(this._element).hasClass(oe) && t(this._menu).hasClass(se)) {
              var n = { relatedTarget: this._element },
                i = t.Event(re.HIDE, n),
                r = e._getParentFromElement(this._element);
              t(r).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se), t(r).toggleClass(se).trigger(t.Event(re.HIDDEN, n)));
            }
          }),
          (i.dispose = function () {
            t.removeData(this._element, Z),
              t(this._element).off(ee),
              (this._element = null),
              (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (i.update = function () {
            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i._addEventListeners = function () {
            var e = this;
            t(this._element).on(re.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (i._getConfig = function (e) {
            return (
              (e = o({}, this.constructor.Default, t(this._element).data(), e)),
              a.typeCheckConfig(J, e, this.constructor.DefaultType),
              e
            );
          }),
          (i._getMenuElement = function () {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(ue));
            }
            return this._menu;
          }),
          (i._getPlacement = function () {
            var e = t(this._element.parentNode),
              n = 'bottom-start';
            return (
              e.hasClass('dropup')
                ? ((n = 'top-start'), t(this._menu).hasClass(ae) && (n = 'top-end'))
                : e.hasClass('dropright')
                ? (n = 'right-start')
                : e.hasClass('dropleft')
                ? (n = 'left-start')
                : t(this._menu).hasClass(ae) && (n = 'bottom-end'),
              n
            );
          }),
          (i._detectNavbar = function () {
            return 0 < t(this._element).closest('.navbar').length;
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              'function' == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (i._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return 'static' === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e;
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(Z);
              if (
                (i || ((i = new e(this, 'object' == typeof n ? n : null)), t(this).data(Z, i)), 'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          (e._clearMenus = function (n) {
            if (!n || (3 !== n.which && ('keyup' !== n.type || 9 === n.which)))
              for (var i = [].slice.call(document.querySelectorAll(le)), r = 0, o = i.length; r < o; r++) {
                var s = e._getParentFromElement(i[r]),
                  a = t(i[r]).data(Z),
                  l = { relatedTarget: i[r] };
                if ((n && 'click' === n.type && (l.clickEvent = n), a)) {
                  var u = a._menu;
                  if (
                    t(s).hasClass(se) &&
                    !(
                      n &&
                      (('click' === n.type && /input|textarea/i.test(n.target.tagName)) ||
                        ('keyup' === n.type && 9 === n.which)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    var c = t.Event(re.HIDE, l);
                    t(s).trigger(c),
                      c.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          t(document.body).children().off('mouseover', null, t.noop),
                        i[r].setAttribute('aria-expanded', 'false'),
                        t(u).removeClass(se),
                        t(s).removeClass(se).trigger(t.Event(re.HIDDEN, l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function (e) {
            var t,
              n = a.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function (n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which && ((40 !== n.which && 38 !== n.which) || t(n.target).closest(ue).length))
                  )
                : ie.test(n.which)) &&
              (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(oe))
            ) {
              var i = e._getParentFromElement(this),
                r = t(i).hasClass(se);
              if (r && (!r || (27 !== n.which && 32 !== n.which))) {
                var o = [].slice.call(
                  i.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')
                );
                if (0 !== o.length) {
                  var s = o.indexOf(n.target);
                  38 === n.which && 0 < s && s--,
                    40 === n.which && s < o.length - 1 && s++,
                    s < 0 && (s = 0),
                    o[s].focus();
                }
              } else {
                if (27 === n.which) {
                  var a = i.querySelector(le);
                  t(a).trigger('focus');
                }
                t(this).trigger('click');
              }
            }
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return ce;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return fe;
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(re.KEYDOWN_DATA_API, le, he._dataApiKeydownHandler)
      .on(re.KEYDOWN_DATA_API, ue, he._dataApiKeydownHandler)
      .on(re.CLICK_DATA_API + ' ' + re.KEYUP_DATA_API, he._clearMenus)
      .on(re.CLICK_DATA_API, le, function (e) {
        e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(t(this), 'toggle');
      })
      .on(re.CLICK_DATA_API, '.dropdown form', function (e) {
        e.stopPropagation();
      }),
      (t.fn[J] = he._jQueryInterface),
      (t.fn[J].Constructor = he),
      (t.fn[J].noConflict = function () {
        return (t.fn[J] = ne), he._jQueryInterface;
      });
    var de = 'modal',
      pe = 'bs.modal',
      ge = '.' + pe,
      me = t.fn[de],
      ve = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ye = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
      _e = {
        HIDE: 'hide' + ge,
        HIDDEN: 'hidden' + ge,
        SHOW: 'show' + ge,
        SHOWN: 'shown' + ge,
        FOCUSIN: 'focusin' + ge,
        RESIZE: 'resize' + ge,
        CLICK_DISMISS: 'click.dismiss' + ge,
        KEYDOWN_DISMISS: 'keydown.dismiss' + ge,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + ge,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ge,
        CLICK_DATA_API: 'click' + ge + '.data-api',
      },
      be = 'modal-open',
      we = 'fade',
      Ee = 'show',
      Te = '.modal-dialog',
      Ce = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      xe = '.sticky-top',
      Se = (function () {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(Te)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var n = e.prototype;
        return (
          (n.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function (e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass(we) && (this._isTransitioning = !0);
              var i = t.Event(_e.SHOW, { relatedTarget: e });
              t(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on(_e.CLICK_DISMISS, '[data-dismiss="modal"]', function (e) {
                    return n.hide(e);
                  }),
                  t(this._dialog).on(_e.MOUSEDOWN_DISMISS, function () {
                    t(n._element).one(_e.MOUSEUP_DISMISS, function (e) {
                      t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function (e) {
            var n = this;
            if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
              var i = t.Event(_e.HIDE);
              if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                this._isShown = !1;
                var r = t(this._element).hasClass(we);
                if (
                  (r && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off(_e.FOCUSIN),
                  t(this._element).removeClass(Ee),
                  t(this._element).off(_e.CLICK_DISMISS),
                  t(this._dialog).off(_e.MOUSEDOWN_DISMISS),
                  r)
                ) {
                  var o = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function (e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return t(e).off(ge);
            }),
              t(document).off(_e.FOCUSIN),
              t.removeData(this._element, pe),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function () {
            this._adjustDialog();
          }),
          (n._getConfig = function (e) {
            return (e = o({}, ve, e)), a.typeCheckConfig(de, e, ye), e;
          }),
          (n._showElement = function (e) {
            var n = this,
              i = t(this._element).hasClass(we);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              t(this._dialog).hasClass('modal-dialog-scrollable')
                ? (this._dialog.querySelector('.modal-body').scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && a.reflow(this._element),
              t(this._element).addClass(Ee),
              this._config.focus && this._enforceFocus();
            var r = t.Event(_e.SHOWN, { relatedTarget: e }),
              o = function () {
                n._config.focus && n._element.focus(), (n._isTransitioning = !1), t(n._element).trigger(r);
              };
            if (i) {
              var s = a.getTransitionDurationFromElement(this._dialog);
              t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
            } else o();
          }),
          (n._enforceFocus = function () {
            var e = this;
            t(document)
              .off(_e.FOCUSIN)
              .on(_e.FOCUSIN, function (n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on(_e.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || t(this._element).off(_e.KEYDOWN_DISMISS);
          }),
          (n._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? t(window).on(_e.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : t(window).off(_e.RESIZE);
          }),
          (n._hideModal = function () {
            var e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                t(document.body).removeClass(be),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger(_e.HIDDEN);
              });
          }),
          (n._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(we) ? we : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(_e.CLICK_DISMISS, function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget && ('static' === n._config.backdrop ? n._element.focus() : n.hide());
                }),
                i && a.reflow(this._backdrop),
                t(this._backdrop).addClass(Ee),
                !e)
              )
                return;
              if (!i) return void e();
              var r = a.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(Ee);
              var o = function () {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass(we)) {
                var s = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
              } else o();
            } else e && e();
          }),
          (n._adjustDialog = function () {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
          }),
          (n._resetAdjustments = function () {
            (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
          }),
          (n._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(Ce)),
                i = [].slice.call(document.querySelectorAll(xe));
              t(n).each(function (n, i) {
                var r = i.style.paddingRight,
                  o = t(i).css('padding-right');
                t(i)
                  .data('padding-right', r)
                  .css('padding-right', parseFloat(o) + e._scrollbarWidth + 'px');
              }),
                t(i).each(function (n, i) {
                  var r = i.style.marginRight,
                    o = t(i).css('margin-right');
                  t(i)
                    .data('margin-right', r)
                    .css('margin-right', parseFloat(o) - e._scrollbarWidth + 'px');
                });
              var r = document.body.style.paddingRight,
                o = t(document.body).css('padding-right');
              t(document.body)
                .data('padding-right', r)
                .css('padding-right', parseFloat(o) + this._scrollbarWidth + 'px');
            }
            t(document.body).addClass(be);
          }),
          (n._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(Ce));
            t(e).each(function (e, n) {
              var i = t(n).data('padding-right');
              t(n).removeData('padding-right'), (n.style.paddingRight = i || '');
            });
            var n = [].slice.call(document.querySelectorAll('' + xe));
            t(n).each(function (e, n) {
              var i = t(n).data('margin-right');
              void 0 !== i && t(n).css('margin-right', i).removeData('margin-right');
            });
            var i = t(document.body).data('padding-right');
            t(document.body).removeData('padding-right'), (document.body.style.paddingRight = i || '');
          }),
          (n._getScrollbarWidth = function () {
            var e = document.createElement('div');
            (e.className = 'modal-scrollbar-measure'), document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function (n, i) {
            return this.each(function () {
              var r = t(this).data(pe),
                s = o({}, ve, t(this).data(), 'object' == typeof n && n ? n : {});
              if ((r || ((r = new e(this, s)), t(this).data(pe, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n](i);
              } else s.show && r.show(i);
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return ve;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(_e.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
      var n,
        i = this,
        r = a.getSelectorFromElement(this);
      r && (n = document.querySelector(r));
      var s = t(n).data(pe) ? 'toggle' : o({}, t(n).data(), t(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
      var l = t(n).one(_e.SHOW, function (e) {
        e.isDefaultPrevented() ||
          l.one(_e.HIDDEN, function () {
            t(i).is(':visible') && i.focus();
          });
      });
      Se._jQueryInterface.call(t(n), s, this);
    }),
      (t.fn[de] = Se._jQueryInterface),
      (t.fn[de].Constructor = Se),
      (t.fn[de].noConflict = function () {
        return (t.fn[de] = me), Se._jQueryInterface;
      });
    var De = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
      Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ne = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Ie(e, t, n) {
      if (0 === e.length) return e;
      if (n && 'function' == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, 'text/html'),
          r = Object.keys(t),
          o = [].slice.call(i.body.querySelectorAll('*')),
          s = function (e, n) {
            var i = o[e],
              s = i.nodeName.toLowerCase();
            if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), 'continue';
            var a = [].slice.call(i.attributes),
              l = [].concat(t['*'] || [], t[s] || []);
            a.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return -1 === De.indexOf(n) || Boolean(e.nodeValue.match(Ae) || e.nodeValue.match(Ne));
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return !0;
                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          },
          a = 0,
          l = o.length;
        a < l;
        a++
      )
        s(a);
      return i.body.innerHTML;
    }
    var ke = 'tooltip',
      Oe = 'bs.tooltip',
      je = '.' + Oe,
      Le = t.fn[ke],
      Pe = 'bs-tooltip',
      He = new RegExp('(^|\\s)' + Pe + '\\S+', 'g'),
      qe = ['sanitize', 'whiteList', 'sanitizeFn'],
      Re = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
      },
      Fe = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
      Me = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
      },
      We = 'show',
      Be = {
        HIDE: 'hide' + je,
        HIDDEN: 'hidden' + je,
        SHOW: 'show' + je,
        SHOWN: 'shown' + je,
        INSERTED: 'inserted' + je,
        CLICK: 'click' + je,
        FOCUSIN: 'focusin' + je,
        FOCUSOUT: 'focusout' + je,
        MOUSEENTER: 'mouseenter' + je,
        MOUSELEAVE: 'mouseleave' + je,
      },
      Ue = 'fade',
      Ke = 'show',
      $e = 'hover',
      Qe = 'focus',
      Ve = (function () {
        function e(e, t) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var i = e.prototype;
        return (
          (i.enable = function () {
            this._isEnabled = !0;
          }),
          (i.disable = function () {
            this._isEnabled = !1;
          }),
          (i.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (i.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i ||
                  ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                  t(e.currentTarget).data(n, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
              } else {
                if (t(this.getTipElement()).hasClass(Ke)) return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element).closest('.modal').off('hide.bs.modal'),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (i.show = function () {
            var e = this;
            if ('none' === t(this.element).css('display')) throw new Error('Please use show on visible elements');
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var r = a.findShadowRoot(this.element),
                o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !o) return;
              var s = this.getTipElement(),
                l = a.getUID(this.constructor.NAME);
              s.setAttribute('id', l),
                this.element.setAttribute('aria-describedby', l),
                this.setContent(),
                this.config.animation && t(s).addClass(Ue);
              var u =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                c = this._getAttachment(u);
              this.addAttachmentClass(c);
              var f = this._getContainer();
              t(s).data(this.constructor.DATA_KEY, this),
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, {
                  placement: c,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: { boundariesElement: this.config.boundary },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    return e._handlePopperPlacementChange(t);
                  },
                })),
                t(s).addClass(Ke),
                'ontouchstart' in document.documentElement && t(document.body).children().on('mouseover', null, t.noop);
              var h = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  'out' === n && e._leave(null, e);
              };
              if (t(this.tip).hasClass(Ue)) {
                var d = a.getTransitionDurationFromElement(this.tip);
                t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(d);
              } else h();
            }
          }),
          (i.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              r = t.Event(this.constructor.Event.HIDE),
              o = function () {
                n._hoverState !== We && i.parentNode && i.parentNode.removeChild(i),
                  n._cleanTipClass(),
                  n.element.removeAttribute('aria-describedby'),
                  t(n.element).trigger(n.constructor.Event.HIDDEN),
                  null !== n._popper && n._popper.destroy(),
                  e && e();
              };
            if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
              if (
                (t(i).removeClass(Ke),
                'ontouchstart' in document.documentElement &&
                  t(document.body).children().off('mouseover', null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Qe] = !1),
                (this._activeTrigger[$e] = !1),
                t(this.tip).hasClass(Ue))
              ) {
                var s = a.getTransitionDurationFromElement(i);
                t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
              } else o();
              this._hoverState = '';
            }
          }),
          (i.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (i.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(Pe + '-' + e);
          }),
          (i.getTipElement = function () {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (i.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll('.tooltip-inner')), this.getTitle()),
              t(e).removeClass(Ue + ' ' + Ke);
          }),
          (i.setElementContent = function (e, n) {
            'object' != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize && (n = Ie(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n).parent().is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (i.getTitle = function () {
            var e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
              e
            );
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              'function' == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (i._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : a.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (i._getAttachment = function (e) {
            return Fe[e.toUpperCase()];
          }),
          (i._setListeners = function () {
            var e = this;
            this.config.trigger.split(' ').forEach(function (n) {
              if ('click' === n)
                t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                  return e.toggle(t);
                });
              else if ('manual' !== n) {
                var i = n === $e ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  r = n === $e ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(i, e.config.selector, function (t) {
                    return e._enter(t);
                  })
                  .on(r, e.config.selector, function (t) {
                    return e._leave(t);
                  });
              }
            }),
              t(this.element)
                .closest('.modal')
                .on('hide.bs.modal', function () {
                  e.element && e.hide();
                }),
              this.config.selector
                ? (this.config = o({}, this.config, { trigger: 'manual', selector: '' }))
                : this._fixTitle();
          }),
          (i._fixTitle = function () {
            var e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== e) &&
              (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
              this.element.setAttribute('title', ''));
          }),
          (i._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusin' === e.type ? Qe : $e] = !0),
              t(n.getTipElement()).hasClass(Ke) || n._hoverState === We
                ? (n._hoverState = We)
                : (clearTimeout(n._timeout),
                  (n._hoverState = We),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === We && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (i._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusout' === e.type ? Qe : $e] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = 'out'),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function () {
                      'out' === n._hoverState && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (i._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (i._getConfig = function (e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function (e) {
                -1 !== qe.indexOf(e) && delete n[e];
              }),
              'number' == typeof (e = o({}, this.constructor.Default, n, 'object' == typeof e && e ? e : {})).delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
              'number' == typeof e.title && (e.title = e.title.toString()),
              'number' == typeof e.content && (e.content = e.content.toString()),
              a.typeCheckConfig(ke, e, this.constructor.DefaultType),
              e.sanitize && (e.template = Ie(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (i._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e;
          }),
          (i._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr('class').match(He);
            null !== n && n.length && e.removeClass(n.join(''));
          }),
          (i._handlePopperPlacementChange = function (e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (i._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute('x-placement') &&
              (t(e).removeClass(Ue),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(Oe),
                r = 'object' == typeof n && n;
              if (
                (i || !/dispose|hide/.test(n)) &&
                (i || ((i = new e(this, r)), t(this).data(Oe, i)), 'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return Me;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return ke;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Oe;
              },
            },
            {
              key: 'Event',
              get: function () {
                return Be;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return je;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Re;
              },
            },
          ]),
          e
        );
      })();
    (t.fn[ke] = Ve._jQueryInterface),
      (t.fn[ke].Constructor = Ve),
      (t.fn[ke].noConflict = function () {
        return (t.fn[ke] = Le), Ve._jQueryInterface;
      });
    var ze = 'popover',
      Ye = 'bs.popover',
      Xe = '.' + Ye,
      Ge = t.fn[ze],
      Je = 'bs-popover',
      Ze = new RegExp('(^|\\s)' + Je + '\\S+', 'g'),
      et = o({}, Ve.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      tt = o({}, Ve.DefaultType, { content: '(string|element|function)' }),
      nt = {
        HIDE: 'hide' + Xe,
        HIDDEN: 'hidden' + Xe,
        SHOW: 'show' + Xe,
        SHOWN: 'shown' + Xe,
        INSERTED: 'inserted' + Xe,
        CLICK: 'click' + Xe,
        FOCUSIN: 'focusin' + Xe,
        FOCUSOUT: 'focusout' + Xe,
        MOUSEENTER: 'mouseenter' + Xe,
        MOUSELEAVE: 'mouseleave' + Xe,
      },
      it = (function (e) {
        var n, i;
        function o() {
          return e.apply(this, arguments) || this;
        }
        (i = e), ((n = o).prototype = Object.create(i.prototype)), ((n.prototype.constructor = n).__proto__ = i);
        var s = o.prototype;
        return (
          (s.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(Je + '-' + e);
          }),
          (s.getTipElement = function () {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (s.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find('.popover-header'), this.getTitle());
            var n = this._getContent();
            'function' == typeof n && (n = n.call(this.element)),
              this.setElementContent(e.find('.popover-body'), n),
              e.removeClass('fade show');
          }),
          (s._getContent = function () {
            return this.element.getAttribute('data-content') || this.config.content;
          }),
          (s._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr('class').match(Ze);
            null !== n && 0 < n.length && e.removeClass(n.join(''));
          }),
          (o._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(Ye),
                i = 'object' == typeof e ? e : null;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new o(this, i)), t(this).data(Ye, n)), 'string' == typeof e)
              ) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          r(o, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return et;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return ze;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Ye;
              },
            },
            {
              key: 'Event',
              get: function () {
                return nt;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Xe;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return tt;
              },
            },
          ]),
          o
        );
      })(Ve);
    (t.fn[ze] = it._jQueryInterface),
      (t.fn[ze].Constructor = it),
      (t.fn[ze].noConflict = function () {
        return (t.fn[ze] = Ge), it._jQueryInterface;
      });
    var rt = 'scrollspy',
      ot = 'bs.scrollspy',
      st = '.' + ot,
      at = t.fn[rt],
      lt = { offset: 10, method: 'auto', target: '' },
      ut = { offset: 'number', method: 'string', target: '(string|element)' },
      ct = { ACTIVATE: 'activate' + st, SCROLL: 'scroll' + st, LOAD_DATA_API: 'load' + st + '.data-api' },
      ft = 'active',
      ht = '.nav, .list-group',
      dt = '.nav-link',
      pt = '.list-group-item',
      gt = '.dropdown-item',
      mt = 'position',
      vt = (function () {
        function e(e, n) {
          var i = this;
          (this._element = e),
            (this._scrollElement = 'BODY' === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              ' ' +
              dt +
              ',' +
              this._config.target +
              ' ' +
              pt +
              ',' +
              this._config.target +
              ' ' +
              gt),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(ct.SCROLL, function (e) {
              return i._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var n = e.prototype;
        return (
          (n.refresh = function () {
            var e = this,
              n =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : mt
                  : this._config.method,
              i = n === mt ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var r,
                    o = a.getSelectorFromElement(e);
                  if ((o && (r = document.querySelector(o)), r)) {
                    var s = r.getBoundingClientRect();
                    if (s.width || s.height) return [t(r)[n]().top + i, o];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function () {
            t.removeData(this._element, ot),
              t(this._scrollElement).off(st),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function (e) {
            if ('string' != typeof (e = o({}, lt, 'object' == typeof e && e ? e : {})).target) {
              var n = t(e.target).attr('id');
              n || ((n = a.getUID(rt)), t(e.target).attr('id', n)), (e.target = '#' + n);
            }
            return a.typeCheckConfig(rt, e, ut), e;
          }),
          (n._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            );
          }),
          (n._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; )
                this._activeTarget !== this._targets[r] &&
                  e >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
            }
          }),
          (n._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var n = this._selector.split(',').map(function (t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
              }),
              i = t([].slice.call(document.querySelectorAll(n.join(','))));
            i.hasClass('dropdown-item')
              ? (i.closest('.dropdown').find('.dropdown-toggle').addClass(ft), i.addClass(ft))
              : (i.addClass(ft),
                i
                  .parents(ht)
                  .prev(dt + ', ' + pt)
                  .addClass(ft),
                i.parents(ht).prev('.nav-item').children(dt).addClass(ft)),
              t(this._scrollElement).trigger(ct.ACTIVATE, { relatedTarget: e });
          }),
          (n._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(ft);
              })
              .forEach(function (e) {
                return e.classList.remove(ft);
              });
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(ot);
              if ((i || ((i = new e(this, 'object' == typeof n && n)), t(this).data(ot, i)), 'string' == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return lt;
              },
            },
          ]),
          e
        );
      })();
    t(window).on(ct.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--; ) {
        var i = t(e[n]);
        vt._jQueryInterface.call(i, i.data());
      }
    }),
      (t.fn[rt] = vt._jQueryInterface),
      (t.fn[rt].Constructor = vt),
      (t.fn[rt].noConflict = function () {
        return (t.fn[rt] = at), vt._jQueryInterface;
      });
    var yt = 'bs.tab',
      _t = '.' + yt,
      bt = t.fn.tab,
      wt = {
        HIDE: 'hide' + _t,
        HIDDEN: 'hidden' + _t,
        SHOW: 'show' + _t,
        SHOWN: 'shown' + _t,
        CLICK_DATA_API: 'click' + _t + '.data-api',
      },
      Et = 'active',
      Tt = '.active',
      Ct = '> li > .active',
      xt = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass(Et)) ||
                t(this._element).hasClass('disabled')
              )
            ) {
              var n,
                i,
                r = t(this._element).closest('.nav, .list-group')[0],
                o = a.getSelectorFromElement(this._element);
              if (r) {
                var s = 'UL' === r.nodeName || 'OL' === r.nodeName ? Ct : Tt;
                i = (i = t.makeArray(t(r).find(s)))[i.length - 1];
              }
              var l = t.Event(wt.HIDE, { relatedTarget: this._element }),
                u = t.Event(wt.SHOW, { relatedTarget: i });
              if (
                (i && t(i).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                o && (n = document.querySelector(o)), this._activate(this._element, r);
                var c = function () {
                  var n = t.Event(wt.HIDDEN, { relatedTarget: e._element }),
                    r = t.Event(wt.SHOWN, { relatedTarget: i });
                  t(i).trigger(n), t(e._element).trigger(r);
                };
                n ? this._activate(n, n.parentNode, c) : c();
              }
            }
          }),
          (n.dispose = function () {
            t.removeData(this._element, yt), (this._element = null);
          }),
          (n._activate = function (e, n, i) {
            var r = this,
              o = (!n || ('UL' !== n.nodeName && 'OL' !== n.nodeName) ? t(n).children(Tt) : t(n).find(Ct))[0],
              s = i && o && t(o).hasClass('fade'),
              l = function () {
                return r._transitionComplete(e, o, i);
              };
            if (o && s) {
              var u = a.getTransitionDurationFromElement(o);
              t(o).removeClass('show').one(a.TRANSITION_END, l).emulateTransitionEnd(u);
            } else l();
          }),
          (n._transitionComplete = function (e, n, i) {
            if (n) {
              t(n).removeClass(Et);
              var r = t(n.parentNode).find('> .dropdown-menu .active')[0];
              r && t(r).removeClass(Et), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1);
            }
            if (
              (t(e).addClass(Et),
              'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0),
              a.reflow(e),
              e.classList.contains('fade') && e.classList.add('show'),
              e.parentNode && t(e.parentNode).hasClass('dropdown-menu'))
            ) {
              var o = t(e).closest('.dropdown')[0];
              if (o) {
                var s = [].slice.call(o.querySelectorAll('.dropdown-toggle'));
                t(s).addClass(Et);
              }
              e.setAttribute('aria-expanded', !0);
            }
            i && i();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data(yt);
              if ((r || ((r = new e(this)), i.data(yt, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
    t(document).on(wt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
      e.preventDefault(), xt._jQueryInterface.call(t(this), 'show');
    }),
      (t.fn.tab = xt._jQueryInterface),
      (t.fn.tab.Constructor = xt),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = bt), xt._jQueryInterface;
      });
    var St = 'toast',
      Dt = 'bs.toast',
      At = '.' + Dt,
      Nt = t.fn[St],
      It = {
        CLICK_DISMISS: 'click.dismiss' + At,
        HIDE: 'hide' + At,
        HIDDEN: 'hidden' + At,
        SHOW: 'show' + At,
        SHOWN: 'shown' + At,
      },
      kt = 'show',
      Ot = 'showing',
      jt = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      Lt = { animation: !0, autohide: !0, delay: 500 },
      Pt = (function () {
        function e(e, t) {
          (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this;
            t(this._element).trigger(It.SHOW), this._config.animation && this._element.classList.add('fade');
            var n = function () {
              e._element.classList.remove(Ot),
                e._element.classList.add(kt),
                t(e._element).trigger(It.SHOWN),
                e._config.autohide && e.hide();
            };
            if ((this._element.classList.remove('hide'), this._element.classList.add(Ot), this._config.animation)) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }),
          (n.hide = function (e) {
            var n = this;
            this._element.classList.contains(kt) &&
              (t(this._element).trigger(It.HIDE),
              e
                ? this._close()
                : (this._timeout = setTimeout(function () {
                    n._close();
                  }, this._config.delay)));
          }),
          (n.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(kt) && this._element.classList.remove(kt),
              t(this._element).off(It.CLICK_DISMISS),
              t.removeData(this._element, Dt),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function (e) {
            return (
              (e = o({}, Lt, t(this._element).data(), 'object' == typeof e && e ? e : {})),
              a.typeCheckConfig(St, e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function () {
            var e = this;
            t(this._element).on(It.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
              return e.hide(!0);
            });
          }),
          (n._close = function () {
            var e = this,
              n = function () {
                e._element.classList.add('hide'), t(e._element).trigger(It.HIDDEN);
              };
            if ((this._element.classList.remove(kt), this._config.animation)) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data(Dt);
              if ((r || ((r = new e(this, 'object' == typeof n && n)), i.data(Dt, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n](this);
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.1';
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return jt;
              },
            },
            {
              key: 'Default',
              get: function () {
                return Lt;
              },
            },
          ]),
          e
        );
      })();
    (t.fn[St] = Pt._jQueryInterface),
      (t.fn[St].Constructor = Pt),
      (t.fn[St].noConflict = function () {
        return (t.fn[St] = Nt), Pt._jQueryInterface;
      }),
      (function () {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(' ')[0].split('.');
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0])
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      })(),
      (e.Util = a),
      (e.Alert = d),
      (e.Button = T),
      (e.Carousel = R),
      (e.Collapse = G),
      (e.Dropdown = he),
      (e.Modal = Se),
      (e.Popover = it),
      (e.Scrollspy = vt),
      (e.Tab = xt),
      (e.Toast = Pt),
      (e.Tooltip = Ve),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
const fs = require('fs'),
  phylotree = require('../../build/phylotree.js'),
  commander = require('commander'),
  pd = require('pretty-data').pd,
  csvParse = require('d3').csvParse,
  _ = require('underscore'),
  phylo_path = require.resolve('phylotree'),
  path = require('path');
console.log(phylo_path);
const http = require('http'),
  port = 3e3;
if ((commander.option('-n --newick <newick>', 'Input newick file').parse(process.argv), !commander.newick))
  throw 'ERROR: Newick file is required... exiting!';
fs.readFile(commander.newick, (e, t) => {
  new phylotree.phylotree(t.toString());
  const n = fs.readFileSync(path.dirname(phylo_path) + '/index.html').toString();
  http
    .createServer((e, t) => {
      t.end(n);
    })
    .listen(3e3, (e) => {
      if (e) return console.log('something bad happened', e);
      var t = 'darwin' == process.platform ? 'open' : 'win32' == process.platform ? 'start' : 'xdg-open';
      require('child_process').exec(t + ' http://localhost:3000');
    });
});
