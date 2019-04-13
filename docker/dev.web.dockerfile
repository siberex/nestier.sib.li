FROM node:alpine

WORKDIR /app

COPY . /app/

RUN \
  apk add --no-cache bash && \
  yarn install --no-cache && \
  adduser -S nodejs && \
  chown -R nodejs /app && \
  chown -R nodejs /home/nodejs

USER nodejs

CMD ["yarn", "start:dev"]
