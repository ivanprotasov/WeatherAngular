import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'local-weather',
    templateUrl: './local-weather.component.html',

})

export class LocalWeatherComponent implements OnInit {

    lat: number;
    lng: number;

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let decimalPipe = new DecimalPipe('en');
                const DECIMAL_PATTERN = '1.0-3';
                this.lat = +decimalPipe.transform(position.coords.latitude, DECIMAL_PATTERN);
                this.lng = +decimalPipe.transform(position.coords.longitude, DECIMAL_PATTERN);
            });
        } else {
            this.lat = 53.93;
            this.lng = 27.64;
        }
    }
}
