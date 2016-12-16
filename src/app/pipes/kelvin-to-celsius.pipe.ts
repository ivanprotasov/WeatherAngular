import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe ({name:'kelvinToCelsius'})
export class KelvinToCelsiusPipe implements PipeTransform {
    transform (value: number): number{
        if (!value) {
            return value
        }
        let decimalPipe = new DecimalPipe('en');
        const DECIMAL_PATTERN = '1.0-0';
        return +decimalPipe.transform(value - 273.15, DECIMAL_PATTERN);
    }
}