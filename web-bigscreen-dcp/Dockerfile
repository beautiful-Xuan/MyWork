FROM richarvey/nginx-php-fpm:1.5.0

WORKDIR /var/www/errors
RUN rm -rf * && touch error_log && chmod 777 error_log
WORKDIR /var/www/html
RUN rm -rf *

ADD src/. /var/www/html/

COPY conf/nginx-site.conf /etc/nginx/sites-available/default.conf
COPY conf/nginx-site-ssl.conf /etc/nginx/sites-available/default-ssl.conf
COPY errors/. /var/www/errors/