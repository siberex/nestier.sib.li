import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const PORT: string|number = process.env.PORT || 8080;

(async () => {
  const adapter = new ExpressAdapter(express());

  // Substitute real user IP from load balancer
  adapter.set('trust proxy', true);
  adapter.set('x-powered-by', false);

  const app = await NestFactory.create(
      AppModule,
      adapter,
  );

  await app.listen(PORT, () => {
    Logger.log(`App listening on port ${PORT}`, 'HTTP');
    Logger.log('Press Ctrl+C to quit.', 'HTTP');
  });
})().catch(err => {
  process.exitCode = 1;
  // tslint:disable-next-line:no-console
  console.error(err);
});
