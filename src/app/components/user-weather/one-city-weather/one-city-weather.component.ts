import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserWeatherActions } from 'app/actions/user-weather.actions';

@Component({
    selector: '[oneCityWeather]',
    templateUrl: 'one-city-weather.component.html',
    styleUrls: ['../user-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OneCityWeatherComponent {
    @Input() city;
    @Output() onToggleFavorite = new EventEmitter();
    favorite : boolean;

    cities: Observable<any>;

    constructor(private userWeatherActions: UserWeatherActions,
                private store: Store<any>) {
        this.cities = store.select('cities');
        this.userWeatherActions = userWeatherActions;
    }

    ngOnInit(){
        this.favorite = this.city.favorite;
    }

    toggleFavorite() {
        this.store.dispatch(this.userWeatherActions.toggleFavorite(this.city.id));
    }

    remove() {
        this.store.dispatch(this.userWeatherActions.removeItem(this.city.id));
    }
}