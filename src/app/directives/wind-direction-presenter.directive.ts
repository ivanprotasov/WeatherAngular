import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDirectionPresenter]'

})
export class WindDirectionPresenter {
    @Input('windDirectionPresenter') direction: number;

    constructor (private el: ElementRef) {}

    ngOnInit(){
        this.el.nativeElement.style.transform = `rotate(${this.direction}deg)`
    }

}



