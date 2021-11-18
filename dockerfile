FROM ubuntu:latest

RUN apt update && apt upgrade -y

RUN apt install -y -q build-essential python3-pip python3-dev
RUN pip3 install -U pip setuptools wheel
RUN pip3 install gunicorn uvloop httptools

COPY Backend/requirements.txt /app/requirements.txt
RUN pip3 install -r /app/requirements.txt

COPY Backend/ /app

# SUPER RUN

