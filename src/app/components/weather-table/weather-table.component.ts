import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '@app/services/weather.service';
import AllWeather from '@app/interfaces/weather/all-weather';

@Component({
    selector: 'weather-table',
    templateUrl: 'weather-table.component.html'
})
export class WeatherTableComponent implements OnInit {
    @Input() lat: number;
    @Input() lng: number;
    requestResolved: boolean;
    allWeather: AllWeather;
    dataError: Error;
    weatherTableHeadData: Array<string>;
    weatherFullBodyData: Array<Array<string>>;
    weatherTableBodyData: Array<Array<string>>;
    amount: number;
    elemsInTable = 5;
    showFrom = 0;
    showBefore: number;

    constructor(private weatherService: WeatherService) {
    }

    private updateTable() {
        this.weatherTableBodyData = this.weatherFullBodyData.slice(this.showFrom, this.showBefore);
    }

    ngOnInit() {
        this.weatherService.getWeather(this.lat, this.lng).then((allWeather) => {
            this.requestResolved = true;
            this.showBefore = this.elemsInTable;
            this.allWeather = allWeather;
            this.weatherTableHeadData = this.weatherService.prepareWeatherHeaderData(this.allWeather);
            this.weatherFullBodyData = this.weatherService.prepareWeatherBodyData(this.allWeather);
            this.amount = this.weatherFullBodyData.length;
            this.updateTable();
        }, (error) => {
            this.dataError = error;
        })
    }

    tableDataChange(data) {
        this.showFrom = data.showFrom;
        this.showBefore = data.showBefore;
        this.updateTable();
    }

}
