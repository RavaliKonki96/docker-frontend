FROM nginx
COPY dist/crud/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/nginx.conf