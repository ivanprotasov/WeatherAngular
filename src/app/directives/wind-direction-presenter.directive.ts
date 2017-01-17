import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDirectionPresenter]'

})
export class WindDirectionPresenter {
    @Input('windDirectionPresenter') direction: number;

    constructor (private el: ElementRef) {}

    ngOnChanges(){
        this.el.nativeElement.style.transform = `rotate(${this.direction}deg)`
    }

}



