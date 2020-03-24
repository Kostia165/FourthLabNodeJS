FROM node:12

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./
RUN npm install

#Budle app source
COPY . .

EXPOSE 3000
EXPOSE 3001
CMD [ "node", "start_server.js" ]