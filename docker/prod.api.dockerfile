# FIXME: Add builder

FROM node:10-alpine

ENV NODE_ENV production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

ENV API_PORT 8081
EXPOSE $API_PORT 8081

ENTRYPOINT ["yarn","start"]
