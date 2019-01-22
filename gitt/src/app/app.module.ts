import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GittComponent } from './gitt/gitt.component';
import { HttpModule } from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,
    GittComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
