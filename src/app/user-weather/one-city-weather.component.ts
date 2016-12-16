import {Component, Input} from "@angular/core";

@Component({
    selector: '[oneCityWeather]',
    templateUrl: './one-city-weather.component.html',
    styleUrls: ['./user-weather.component.scss']
})

export class OneCityWeatherComponent {
    @Input() cityWeather;
    @Input() city;
}