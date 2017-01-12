import {Component, NgZone} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(private ngZone: NgZone){
        //this.ngZone.onStable.subscribe(this.onZoneStable);
        //this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
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
