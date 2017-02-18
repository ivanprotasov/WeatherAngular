import { Component, OnInit} from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserWeatherActions } from 'app/actions/user-weather.actions';


@Component({
    selector: 'user-weather',
    styleUrls: ['user-weather.component.scss'],
    templateUrl: 'user-weather.component.html'
})

export class UserWeatherComponent  implements OnInit {
    cities: Observable<any>;
    lastUpdate: Date;

    constructor(private localStorageService: LocalStorageService,
                private userWeatherActions: UserWeatherActions,
                private store: Store<any>)
                {
                    this.cities = store.select('cities');
                    this.userWeatherActions = userWeatherActions;
                }

    ngOnInit(){
        const cities = JSON.parse(this.localStorageService.getItem('cities'));
        this.store.dispatch(this.userWeatherActions.resetItems(cities));
        this.lastUpdate = new Date();
    }

    addItem(city: string) {
        this.store.dispatch(this.userWeatherActions.addItemAsync(city));
    }
}
