import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorDetector]'
})
export class ColorDetector {
  @Input('colorDetector') temperature: number;

  constructor (private el: ElementRef) {}

  ngOnInit(){
    let temperature = this.temperature,
        saturation;
    if (temperature < 0) {
      saturation = 100 + temperature*2;
      saturation = (saturation > 0) ? saturation : 0;
      this.el.nativeElement.style.backgroundColor = `hsl(190, 100%, ${saturation}%)`
    } else {
      saturation = 100 - temperature*2;
      saturation = (saturation > 0) ? saturation : 0;
      this.el.nativeElement.style.backgroundColor = `hsl(15, 100%, ${saturation}%)`
    }
  }

}



