import {Component, Input, ChangeDetectorRef, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: 'lastUpdate',
    templateUrl: 'last-update.html'
})

export class LastUpdateComponent {
    @Input() lastUpdate : Date;
    milliseconds : number;

    constructor(private ref: ChangeDetectorRef) {
        // ref.detach();
        // setInterval(() => {
        //     this.ref.reattach();
        //     this.ref.detectChanges();
        //     this.ref.detach();
        // }, 5000);
    }

    ngOnChanges() {

        this.milliseconds = this.lastUpdate.getMilliseconds();
    }
}