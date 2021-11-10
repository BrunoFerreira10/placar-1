FROM httpd:alpine

#RUN mkdir -p /usr/local/apache2/uploads/hello

RUN mkdir -p /usr/local/apache2/var
RUN chown -R daemon:daemon /usr/local/apache2/var
RUN chmod -R 755 /usr/local/apache2/var

COPY ./server.crt /usr/local/apache2/conf/server.crt
COPY ./server.key /usr/local/apache2/conf/server.key
#COPY ./user.passwd /usr/local/apache2/user.passwd

COPY ./httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf
COPY ./httpd-dav.conf /usr/local/apache2/conf/extra/httpd-dav.conf
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
#COPY ./webdavFileTree/ /usr/local/apache2/htdocs/
