import { Injectable, OnInit }    from '@angular/core';
import { UserWeatherService } from './user-weather.service';

@Injectable()
export class UserAllWeatherService {
    cities = [];
    constructor(private userWeatherService: UserWeatherService) {
        let _this = this;
        setInterval(function () {
            _this.cities = []
        }, 3600000); // 3 hours
    }

    getAllWeather(cityNames: Array<string>): Array<Promise<String>> {
        let _this = this;
        if (cityNames.length === 0){
            return [];
        }
        return cityNames.reduce(function(previousValue, element){
            for (let i=0; i<_this.cities.length; i++) {
                if (element === _this.cities[i].name){
                    previousValue.push(_this.cities[i]);
                    return previousValue
                }
            }

            let cityObj = {
                name: element,
                promise: _this.userWeatherService.getWeather(element)
            };
            _this.cities.push(cityObj);
            previousValue.push(cityObj);
            return previousValue;
        }, []);
    }
}
