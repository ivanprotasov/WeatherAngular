import { Component } from '@angular/core';

@Component({
    selector: 'user-weather',
    templateUrl: './user-weather.component.html',
    styleUrls: ['./user-weather.component.scss']
})

export class UserWeatherComponent {
    cities = [];

    clicked(value: string) {
        this.cities.push(value);
    }
}
