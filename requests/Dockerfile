# base image
FROM python:slim-jessie

# set working directory
WORKDIR /data
# Add requirements and py-files
#COPY requirements.txt main.py calculation.py /data/
COPY ./requests/requirements.txt ./requests/calculation.py /data/
COPY ./requests/templates /data/templates/
COPY ./requests/project /data/project/

# Add cronjob to delete files after one week
COPY ./requests/cron_del_files /etc/cron.d/cron_del_files
RUN apt-get update && apt-get -y install cron && \
    apt-get -y install gcc
RUN chmod 0644 /etc/cron.d/cron_del_files && \
    crontab /etc/cron.d/cron_del_files && \
    cron
# Add API Key from .env file to the Docker container env variables
ARG BACKEND_APIKEY
ENV BACKEND_APIKEY=${BACKEND_APIKEY}

# Added so that main.py can import calculation.py 
ENV PYTHONPATH=/data
ENV APP_SETTINGS=project.server.config.DevelopmentConfig

# install numpy and requirements
RUN bash -c 'mkdir -p /data/{files,zipped}' && \
    pip install -r requirements.txt
