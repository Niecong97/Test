FROM hub.c.163.com/library/nginx

MAINTAINER 15107026667@163.com

RUN rm /etc/nginx/conf.d/default.conf

ADD default.conf /etc/nginx/conf.d

COPY dist/ /usr/share/nginx/html

