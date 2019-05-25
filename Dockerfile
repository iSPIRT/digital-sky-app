FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY yarn*.lock ./
USER node
RUN npm install
COPY --chown=node:node . .
RUN yarn build
EXPOSE 8000
CMD [ "node", "app.js" ]