import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: string|number = process.env.PORT || 8080;

(async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
})().catch(err => {
  process.exitCode = 1;
  // tslint:disable-next-line:no-console
  console.error(err);
});
