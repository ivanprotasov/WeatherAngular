import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import AllWeather from './../interfaces/weather/all-weather'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class WeatherService {

    constructor(private http: Http) {
    }

    getWeather(lat, lng): Promise <AllWeather> {
        let url: string;

         url = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=50&APPID=3801414355a652393fc513e2ceef2156';
        //url = './../data/test.json';

        return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    prepareWeatherBodyData(tableData): Array<Array<string>> {
        let parsedBodyData = tableData.list.map(function (currentValue, index: number): Array<string> {
            let rowData: Array<string> = [];
            index++;
            let indexString: string = String(index);
            rowData.push(indexString, currentValue.name);
            let main = currentValue.main;
            for (let key in  main) {
                let valueParam: string = String(main[key]);
                rowData.push(valueParam)
            }
            return rowData;
        });

        return parsedBodyData
    }

    prepareWeatherHeaderData(tableData): Array<string> {
        let parsedHeaderData: Array<string> = ['#', 'City Name'];
        let main = tableData.list[0].main;
        for (let key in  main) {
            parsedHeaderData.push(key);
        }
        return parsedHeaderData
    }

}
