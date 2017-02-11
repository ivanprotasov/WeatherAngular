import { Action } from '@ngrx/store';
import * as _ from "lodash";

import { UserWeatherActions } from '../actions/user-weather.actions';

export function userWeatherReducer(state: Array<any> = [], action: Action) {
    switch (action.type) {
        case UserWeatherActions.RESET_ITEMS:
            if (action.payload.cities) {
                return [ ...action.payload.cities.cities];
            }
            return state;

        case UserWeatherActions.ADD_ITEM:{
            if (findIndex(action.payload.cityData.id) < 0){
                return [ ...state, _.assign({}, action.payload.cityData, {favorite: false})];
            }
            return state;
        }

        case UserWeatherActions.TOGGLE_FAVORITE:{
            const index = findIndex(action.payload.cityId);
            let  objWithFavorite = _.assign({},state[index]);
            objWithFavorite.favorite = !objWithFavorite.favorite;
            return [...state.slice(0, index), objWithFavorite,  ...state.slice(index+1)];
        }

        case UserWeatherActions.REMOVE_ITEM:
            const index = findIndex(action.payload.cityId);
            return [...state.slice(0, index),  ...state.slice(index+1)];

        default:
            return state;
    }


    function findIndex(cityId){
        return state.findIndex(function (element) {
            return element.id === cityId;
        });
    }
}

