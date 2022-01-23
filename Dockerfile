FROM node:16
WORKDIR /src/app
COPY package.json ./
RUN npm install
COPY . .
CMD npm start
EXPOSE 3000