FROM node:10-alpine

WORKDIR /app

COPY . /app/

RUN \
  apk add --no-cache bash && \
  yarn install --no-cache && \
  adduser -S nodejs && \
  chown -R nodejs /app && \
  chown -R nodejs /home/nodejs

USER nodejs

ENV API_PORT 8081
EXPOSE $API_PORT 8081

CMD ["yarn", "start:hmr"]
