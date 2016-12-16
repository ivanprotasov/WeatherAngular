import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import AllWeather from './../interfaces/weather/all-weather';
import { KelvinToCelsiusPipe } from '../pipes/kelvin-to-celsius.pipe.ts';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class WeatherService {

    constructor(private http: Http) {
    }

    getWeather(lat, lng): Promise <AllWeather> {
        let url: string;

        url = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lng + '&cnt=50&APPID=56a49954299e7f448920290ffc21d018';

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
                if (main.hasOwnProperty(key)) {
                    let valueParam: string = String(main[key]);
                    if (key.indexOf('temp') >= 0) {
                        let celsiusToFahrenheitPipe = new KelvinToCelsiusPipe();
                        valueParam = celsiusToFahrenheitPipe.transform(+valueParam)+'';
                    }
                    rowData.push(valueParam);
                }
            }
            return rowData;
        });

        return parsedBodyData
    }

    prepareWeatherHeaderData(tableData): Array<string> {
        let parsedHeaderData: Array<string> = ['#', 'City Name'];
        let main = tableData.list[0].main;
        for (let key in  main) {
            if (main.hasOwnProperty(key)) {
                parsedHeaderData.push(key);
            }
        }
        return parsedHeaderData
    }

}
