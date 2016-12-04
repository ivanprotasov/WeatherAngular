import { Component } from '@angular/core';
import {WeatherService} from "../services/weather.service";

import AllWeather from '../interfaces/weather/all-weather';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allWeather: AllWeather;

  ngOnInit (){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              console.log(position);
              //WeatherService.getWeather(position).then(this.renderPage.bind(this), this.renderError.bind(this));
              this.weatherService.getWeather(position).then((allWeather) => {
                  console.log(allWeather);
                  let tableData = allWeather as AllWeather;

                  let weatherHead = this.weatherService.prepareWeatherHeaderData(tableData);
                  let weatherBody = this.weatherService.prepareWeatherBodyData(tableData);
                  console.log(weatherBody);
                  this.allWeather = allWeather
              } )
          });
      } else {
          console.log("Geolocation is not supported by this browser.");
          //WeatherService.getWeather('').then(this.renderPage.bind(this));
      }
  }

    constructor (private weatherService: WeatherService) {}


}
