import { enableProdMode } from '@angular/core';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const PORT: string | number = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

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
