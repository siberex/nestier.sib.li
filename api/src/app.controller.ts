import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
// import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { LoggingInterceptor } from '@nestier/interceptors/logging.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getIndex(): object {
    return this.appService.getIndex();
  }
}
