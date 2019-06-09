FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY .env ./
COPY yarn*.lock ./
RUN npm -g install yarn
USER node
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
RUN yarn build
EXPOSE 8000
CMD [ "node", "app.js" ]