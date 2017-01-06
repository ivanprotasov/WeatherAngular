import * as Immutable from 'immutable';
import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { List } from 'immutable';
import { UserWeatherService } from '../services/user-weather.service';
import {setTimeout} from "timers";


@Component({
    selector: 'user-weather',
    templateUrl: './user-weather.component.html'
})

export class UserWeatherComponent  implements OnInit {
    cities: List<any>;
    lastUpdate: Date;

    constructor(private localStorageService: LocalStorageService,
                private userWeatherService: UserWeatherService){}

    ngOnInit(){
        this.cities = Immutable.List(this.localStorageService.getItem('cities') || []) as List<{}>;
        setInterval(() => {
            this.lastUpdate = new Date();
        }, 100)
    }

    toggleFavorite($event){
        let index = this.cities.findKey(function (item) {
            return item.city.name === $event.city
        });
        let cityData = this.cities.get(index);
        cityData.favorite = $event.favorite;
        this.cities.set(index, cityData);
        this.localStorageService.setItem('cities', this.cities.toJS());
    }

    addItem(city: string) {
        let cityData = this.userWeatherService.getWeather(city);
        cityData.then((cityData) => {
            this.cities = this.cities.push({
                city: cityData
            });
            this.localStorageService.setItem('cities', this.cities.toJS());
        });
    }

    removeItem($event){
        this.cities = this.cities.delete($event);
        this.localStorageService.setItem('cities', this.cities.toJS());
    }
    
    updateWeather() {
        console.log(this.cities.toJS());
    }
}
