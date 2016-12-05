import { Component } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {WeatherService} from "../services/weather.service";
import AllWeather from '../interfaces/weather/all-weather';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    allWeather: AllWeather;
    weatherHead: Array<string>;
    weatherBody: Array<Array<string>>;
    splittedTableBody: Array<Array<Array<string>>>;
    lat: number = 53.9;
    lng: number = 27.5667;

    constructor(
        private weatherService: WeatherService
    ) {}


    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.weatherService.getWeather(position).then((allWeather) => {
                    this.setWeatherData(allWeather)
                })
            });
        } else {
            console.log("Geolocation is not supported by this browser.");

            this.weatherService.getWeather({
                coords: {
                    latitude: this.lat,
                    longitude: this.lng
                }
            }).then((allWeather) => {
                this.setWeatherData(allWeather)
            })
        }
    }

    private setWeatherData(allWeather) {
        this.allWeather = allWeather as AllWeather;
        this.weatherHead = this.weatherService.prepareWeatherHeaderData(this.allWeather);
        this.weatherBody = this.weatherService.prepareWeatherBodyData(this.allWeather);
    }

    tableDataChange(data){
        setTimeout(()=> {
            this.splittedTableBody = data;
        }, 0)
    }

}
