import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { DetailedComponent } from './main/detailed/detailed.component';
import { SkyconComponent } from './skycon/skycon.component';
import { WeekComponent } from './main/week/week.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreLoaderComponent,
    DetailedComponent,
    SkyconComponent,
    WeekComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
