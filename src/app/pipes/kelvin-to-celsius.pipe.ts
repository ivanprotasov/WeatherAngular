import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({name:'kelvinToCelsius'})
export class KelvinToCelsiusPipe implements PipeTransform {
    transform (value: number): number{
        if (!value) {
            return value
        }
        return Math.round(value - 273.15);
    }
}