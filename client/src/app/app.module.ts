import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { httpInterceptorProviders } from './http-interceptors';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CounterComponent,
      ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
