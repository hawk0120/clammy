import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {AuthInterceptorService} from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
  ],
  providers: [HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true],
  bootstrap: [AppComponent]
})
export class AppModule { }

