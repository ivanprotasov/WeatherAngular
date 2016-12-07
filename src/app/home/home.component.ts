import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    lat: number = 53.9;
    lng: number = 27.5667;

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
}
