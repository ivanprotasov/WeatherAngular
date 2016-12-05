import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component.ts';
import {WeatherService} from "../services/weather.service";
import {DefaultTableComponent} from "../components/default-table/default-table.component";
import {PaginationComponent} from "../components/pagination/pagination.component";
import {AgmCoreModule} from "angular2-google-maps/core/core-module";

@NgModule({
    declarations: [
        HomeComponent,
        DefaultTableComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCzIWs6WyuDa3RTMqAIE7KFS6j_51mAFwk'
        })
    ],
    providers: [WeatherService],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}
