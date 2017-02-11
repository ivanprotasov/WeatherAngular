import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserWeatherComponent } from './user-weather.component';
import { UserWeatherService } from '@app/services/user-weather.service';
import { OneCityWeatherComponent } from './one-city-weather/one-city-weather.component';
import { KelvinToCelsiusPipe } from '@app/pipes/kelvin-to-celsius.pipe';
import { UserAllWeatherService } from '@app/services/user-all-weather.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { UserWeatherTableComponent } from './user-weather-table/user-weather-table.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { LastUpdateComponent } from './last-update/last-update.component';
import { ColorDetector } from '@app/directives/color-detector.directive';
import { WindDirectionPresenter } from '@app/directives/wind-direction-presenter.directive';
import { FavoriteCity } from '@app/directives/favorite-city.derective';
import {UserWeatherActions} from "@app/actions/user-weather.actions";

@NgModule({
    declarations: [
        UserWeatherComponent,
        OneCityWeatherComponent,
        UserWeatherTableComponent,
        LastUpdateComponent,
        KelvinToCelsiusPipe,
        ColorDetector,
        WindDirectionPresenter,
        FavoriteCity
    ],
    imports: [
        BrowserModule,
        Angular2FontawesomeModule
    ],
    providers: [
        UserWeatherService,
        UserAllWeatherService,
        LocalStorageService,
        UserWeatherActions
    ],
    bootstrap: [UserWeatherComponent]
})
export class UserWeatherModule {
}
