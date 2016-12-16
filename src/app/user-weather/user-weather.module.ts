import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserWeatherComponent } from './user-weather.component';
import { UserWeatherService } from '../services/user-weather.service';
import { CityWeatherPipe } from '../pipes/city-weather.pipe';
import { OneCityWeatherComponent } from './one-city-weather.component';
import { KelvinToCelsiusPipe } from '../pipes/kelvin-to-celsius.pipe';
import { UserAllWeatherService } from '../services/user-all-weather.service';

@NgModule({
    declarations: [
        UserWeatherComponent,
        OneCityWeatherComponent,
        CityWeatherPipe,
        KelvinToCelsiusPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        UserWeatherService,
        UserAllWeatherService
    ],
    bootstrap: [UserWeatherComponent]
})
export class UserWeatherModule {
}
