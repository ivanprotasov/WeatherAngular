import { Pipe, PipeTransform } from '@angular/core';
import { UserAllWeatherService } from '../services/user-all-weather.service';

@Pipe ({
    name:'cityWeather',
    pure: false
})
export class CityWeatherPipe implements PipeTransform {
    constructor(private userWeatherService: UserAllWeatherService) {
    }

    transform (values: Array<string>): Array<Promise<String>>{
        return this.userWeatherService.getAllWeather(values);
    }
}