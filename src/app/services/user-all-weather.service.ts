import { Injectable, OnInit }    from '@angular/core';
import { UserWeatherService } from './user-weather.service';

@Injectable()
export class UserAllWeatherService {
    cities = [];
    constructor(private userWeatherService: UserWeatherService) {
        setInterval(() => {
            this.cities = []
        }, 3600000); // 3 hours
    }

    getAllWeather(cityNames: Array<string>): Array<Promise<String>> {
        if (cityNames.length === 0){
            return [];
        }
        return cityNames.reduce((previousValue, element) => {
            for (let i=0; i<this.cities.length; i++) {
                if (element === this.cities[i].name){
                    previousValue.push(this.cities[i]);
                    return previousValue
                }
            }

            let cityObj = {
                name: element,
                promise: this.userWeatherService.getWeather(element)
            };
            this.cities.push(cityObj);
            previousValue.push(cityObj);
            return previousValue;
        }, []);
    }
}
