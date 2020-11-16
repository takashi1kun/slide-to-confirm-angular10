import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfirmSliderComponent } from './confirm-slider/confirm-slider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ConfirmSliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
