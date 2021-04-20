
FROM node:12-alpine 
WORKDIR /usr/src/app/api
COPY package.json package-lock.json ./ 
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node","server.js" ]
