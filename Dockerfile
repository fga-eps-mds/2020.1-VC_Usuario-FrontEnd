FROM node:12.18.4-alpine 

RUN npm install -g http-server

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]