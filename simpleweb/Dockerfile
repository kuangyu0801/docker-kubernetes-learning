# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]

# build command
# docker build -t kuangyu0801/simpleweb .
# docker run -p in-port:8080 kuangyu0801/simpleweb