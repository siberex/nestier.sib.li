import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowService } from './services/window/window.service';

// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: WindowService,
      useFactory: getWindow,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
