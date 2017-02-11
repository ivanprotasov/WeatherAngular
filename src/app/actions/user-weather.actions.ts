"use strict";
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

@Injectable()
export class UserWeatherActions {
    public static RESET_ITEMS: string  = '[USER_WEATHER] RESET_ITEMS';
    public static ADD_ITEM: string  = '[USER_WEATHER] ADD_ITEM';
    public static TOGGLE_FAVORITE: string  = '[USER_WEATHER] TOGGLE_FAVORITE';
    public static REMOVE_ITEM: string  = '[USER_WEATHER] REMOVE_ITEM';

    public resetItems(cities): Action {
        return {
            type: UserWeatherActions.RESET_ITEMS,
            payload: {
                cities: cities
            }
        };
    }

    public addItem(cityData): Action {
        return {
            type: UserWeatherActions.ADD_ITEM,
            payload: {
                cityData: cityData
            }
        };
    }

    public removeItem(cityId): Action {
        return {
            type: UserWeatherActions.REMOVE_ITEM,
            payload: {
                cityId: cityId
            }
        };
    }

    public toggleFavorite(cityId): Action {
        return {
            type: UserWeatherActions.TOGGLE_FAVORITE,
            payload: {
                cityId: cityId
            }
        };
    }

}