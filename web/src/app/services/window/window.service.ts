import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  public navigator: any = {};
  public location: any = {};

  public scrollTo(a: number, b: number) {
    return null;
  }
  public alert(str: string) {
    return;
  }
  public open(...args: any[]) {
    return;
  }

  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number,
  ): number {
    return 0;
  }

  public clearTimeout(timeoutId: number): void {}

  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return 0;
  }

  public ga(
    // tslint:disable-next-line:ban-types
    command: string | Function,
    params?: any,
    extra?: any,
  ): void {}
}
