# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install npm dependencies

# take advantage of container cache by install the less-frequent modified package.json
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]

# build command
# docker build -t kuangyu0801/simpleweb .
# docker run -p in-port:8080 kuangyu0801/simpleweb