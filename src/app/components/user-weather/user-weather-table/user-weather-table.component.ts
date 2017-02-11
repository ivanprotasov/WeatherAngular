import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: 'userWeatherTable',
    templateUrl: 'user-weather-table.html',
    styleUrls: ['../user-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserWeatherTableComponent {
    @Input() cities: Array<{}>;
}