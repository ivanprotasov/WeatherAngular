import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {List} from "immutable";

@Component({
    selector: 'userWeatherTable',
    templateUrl: 'user-weather-table.html',
    styleUrls: ['../user-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserWeatherTableComponent {
    @Input() cities: List<{}>;
    @Output() onToggleFavorite = new EventEmitter();
    @Output() onRemove = new EventEmitter();

    toggleFavorite($event){
        this.onToggleFavorite.emit($event);
    }

    remove($event){
        this.onRemove.emit($event);
    }
}