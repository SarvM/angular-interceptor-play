import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppInterceptorModule } from './app.interceptor';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppInterceptorModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [  ]
})
export class AppModule { }
