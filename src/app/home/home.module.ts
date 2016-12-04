import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component.ts';
import {WeatherService} from "../services/weather.service";
import {DefaultTableComponent} from "../components/default-table/default-table.component";

@NgModule({
  declarations: [
    HomeComponent,
    DefaultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
