import {Component, NgZone} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    wolves = 0;

    constructor(private ngZone: NgZone){
        //this.ngZone.onStable.subscribe(this.onZoneStable);
        //this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
    }

    inc(i: number) {
        this.wolves = Math.min(5, Math.max(0, this.wolves + i));
    }

    //onZoneStable(){
    //    let date = new Date();
    //    console.log('Finish  change detection of tree at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' +  date.getUTCMilliseconds());
    //}
    //
    //onZoneUnstable(){
    //    let date = new Date();
    //    console.log('Start change detection of tree at: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' +  date.getUTCMilliseconds());
    //}

}
