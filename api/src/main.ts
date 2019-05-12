import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

// App Engine deployment should use process.env.PORT
const PORT: string | number = process.env.API_PORT || process.env.PORT || 8081;
// HMR for dev server
declare const module: any;

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  if ('GAE_SERVICE' in process.env && process.env.GAE_SERVICE === 'api') {
    // Reflects dispatch.yaml for App Engine deployment
    app.setGlobalPrefix('api');
  }

  // Substitute real user IP from load balancer
  app.set('trust proxy', true);
  app.set('x-powered-by', false);

  // Validate DTO classes for all requests
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,
    // Automatically transform request payloads to the corresponding DTO classes.
    transform: true,
    validationError: {target: false},
  }));

  // Add Swagger api doc
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Nestier API')
    .setVersion('1.0');
  let swaggerPath = 'doc';
  if ('GAE_SERVICE' in process.env && process.env.GAE_SERVICE === 'api') {
    swaggerOptions.setBasePath('api');
    // Path should be set explicitly: https://github.com/nestjs/swagger/issues/105
    swaggerPath = 'api/doc';
  }
  const apiDoc = SwaggerModule.createDocument(app, swaggerOptions.build());
  SwaggerModule.setup(swaggerPath, app, apiDoc);

  if ('API_ENABLE_CORS' in process.env && /(true|on|1)/gi.test(process.env.API_ENABLE_CORS)) {
    app.enableCors();
  }

  await app.listen(PORT, () => {
    Logger.log(`App listening on port ${PORT}`, 'HTTP');
    Logger.log('Press Ctrl+C to quit.', 'HTTP');
  });

  // HMR for dev server
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
})().catch(err => {
  process.exitCode = 1;
  // tslint:disable-next-line:no-console
  console.error(err);
});
