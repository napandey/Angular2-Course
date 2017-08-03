import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderNavigationBarComponent} from "./components/header-navigation-bar/header-navigation-bar.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
