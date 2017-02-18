import { Injectable } from "@angular/core";
import { UserWeatherService } from "@app/services/user-weather.service";
import { Actions, Effect } from "@ngrx/effects";
import { UserWeatherActions } from "@app/actions/user-weather.actions";
import { Observable } from "rxjs";

@Injectable()
export class UserWeatherEffects {
    constructor(private actions$: Actions,
                private userWeatherService: UserWeatherService ){
    }

    @Effect() addItemAsync$ = this.actions$
        .ofType(UserWeatherActions.ADD_ITEM_ASYNC)
        .map(action => action.payload)
        .flatMap((payload) =>this.userWeatherService.getWeather(payload.cityData))
        .map(res =>((new UserWeatherActions).addItem(res)))
        .catch(() => Observable.of({ type: 'LOGIN_FAILED' }));
}