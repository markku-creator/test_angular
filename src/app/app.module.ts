import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule, } from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, HttpModule, MatButtonModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
