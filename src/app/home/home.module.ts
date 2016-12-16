import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LocalWeatherComponent } from '../local-weather/local-weather.component';
import { WeatherService } from '../services/weather.service';
import { HomeComponent } from './home.component';
import { LocalWeatherModule } from '../local-weather/local-weather.module';
import { UserWeatherComponent } from '../user-weather/user-weather.component';
import { UserWeatherModule } from '../user-weather/user-weather.module';

const appRoutes: Routes = [
    { path: 'local-weather', component: LocalWeatherComponent },
    { path: 'user-weather', component: UserWeatherComponent },
    { path: '', component: LocalWeatherComponent }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        LocalWeatherModule,
        UserWeatherModule
    ],
    providers: [WeatherService],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}
