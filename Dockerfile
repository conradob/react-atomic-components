FROM node:15 as build-stage

# ENV PATH="/home/node/.npm-global/bin:${PATH}"
# ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm test -- --watchAll=false

RUN npm run build

USER node

FROM nginx:stable

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
