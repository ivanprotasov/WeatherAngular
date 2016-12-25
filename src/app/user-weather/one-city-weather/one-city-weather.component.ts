import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: '[oneCityWeather]',
    templateUrl: 'one-city-weather.component.html',
    styleUrls: ['../user-weather.component.scss']
})

export class OneCityWeatherComponent {
    @Input() city;
    @Input() favorite;
    @Input() index;
    @Output() onToggleFavorite = new EventEmitter();
    @Output() onRemove = new EventEmitter();

    toggleFavorite() {
        this.favorite = !this.favorite;
        this.onToggleFavorite.emit({
            city: this.city.name,
            favorite: this.favorite
        });
    }

    remove() {
        this.onRemove.emit(this.index)
    }
}