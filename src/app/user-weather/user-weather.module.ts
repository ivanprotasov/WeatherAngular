import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserWeatherComponent } from './user-weather.component';
import { UserWeatherService } from '../services/user-weather.service';
import { OneCityWeatherComponent } from './one-city-weather/one-city-weather.component';
import { KelvinToCelsiusPipe } from '../pipes/kelvin-to-celsius.pipe';
import { UserAllWeatherService } from '../services/user-all-weather.service';
import { LocalStorageService } from '../services/local-storage.service';
import { UserWeatherTableComponent } from './user-weather-table/user-weather-table.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


@NgModule({
    declarations: [
        UserWeatherComponent,
        OneCityWeatherComponent,
        UserWeatherTableComponent,
        KelvinToCelsiusPipe
    ],
    imports: [
        BrowserModule,
        Angular2FontawesomeModule
    ],
    providers: [
        UserWeatherService,
        UserAllWeatherService,
        LocalStorageService
    ],
    bootstrap: [UserWeatherComponent]
})
export class UserWeatherModule {
}
