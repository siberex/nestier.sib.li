import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
// @fixme remove debug
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    Logger.log('Logging event...', 'LoggingInterceptor');

    const now = Date.now();
    return next.handle()
      .pipe(
        tap(
          () => Logger.log(`Finished... ${Date.now() - now}ms`, 'LoggingInterceptor'),
        ),
      );
  }
}
