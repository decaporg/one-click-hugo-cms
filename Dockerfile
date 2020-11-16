FROM node:latest

# Adding `nodemon` as a global so it's available to the `CMD` instruction below
RUN npm install -g nodemon

# Copy over the host's project files
COPY . /usr/src/app
# This provides a starting point, but will later be overridden by `docker run -v...`

# Use this app directory moving forward through this file
WORKDIR /usr/src/app

# PREPARE `NODE_MODULES`
## Grab the `package.json` from the host and copy into `tmp`
COPY package.json /tmp/package.json

## Use that to get `node_modules` set up
RUN cd /tmp && npm install

## Copy that resulting `node_modules` into the WORKDIR
RUN cp -a /tmp/node_modules /usr/src/app/

EXPOSE 3000
CMD [ "npm", "start" ]

