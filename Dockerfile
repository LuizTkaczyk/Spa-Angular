FROM node:14-alpine AS projeto-spa
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=projeto-spa app/dist/projeto1 /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf