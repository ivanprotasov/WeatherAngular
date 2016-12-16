import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserWeatherService {

    constructor(private http: Http) { }

    getWeather(city): Promise <String> {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=50&APPID=56a49954299e7f448920290ffc21d018`;

        //http://api.openweathermap.org/data/2.5/weather?q=London
        // let url = './../data/test.json';

        return this.http.get(url).toPromise().then(response => {
                return response.json()
        }).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
