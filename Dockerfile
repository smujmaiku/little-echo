# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:12-alpine
RUN apk --no-cache add git

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE $PORT

CMD [ "npm", "start" ]
