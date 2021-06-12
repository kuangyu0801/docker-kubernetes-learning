
# comment below for AWS deployment
FROM node:alpine as builder
# uncomment below for AWS deployment
#FROM node:alpine

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
# build result will be in /app/build
RUN npm run build

FROM nginx
# /usr/share/nginx/html is the default html folder for ngix
# comment below for AWS deployment
COPY --from=builder /app/build /usr/share/nginx/html
# uncomment below for AWS deployment
#COPY --from=0 /app/build /usr/share/nginx/html

# nginx container already includes RUN command
# $docker run -p 8080:80 31b79608662340b61bab
# 80 is default port for ngnix