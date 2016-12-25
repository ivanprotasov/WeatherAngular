import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherTableComponent } from './weather-table.component';

@NgModule({
    declarations: [
        WeatherTableComponent
    ],
    imports: [BrowserModule],
    bootstrap: [WeatherTableComponent]
})
export class WeatherTableModule {
}
