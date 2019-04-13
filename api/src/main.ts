import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

// App Engine deployment should use process.env.PORT
const PORT: string|number = process.env.API_PORT || process.env.PORT || 8080;

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  // Substitute real user IP from load balancer
  app.set('trust proxy', true);
  app.set('x-powered-by', false);

  await app.listen(PORT, () => {
    Logger.log(`App listening on port ${PORT}`, 'HTTP');
    Logger.log('Press Ctrl+C to quit.', 'HTTP');
  });
})().catch(err => {
  process.exitCode = 1;
  // tslint:disable-next-line:no-console
  console.error(err);
});
