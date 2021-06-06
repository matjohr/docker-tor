FROM node:14
WORKDIR /home/node/app
RUN npm install got tunnel cross-spawn --save
COPY . .
USER node