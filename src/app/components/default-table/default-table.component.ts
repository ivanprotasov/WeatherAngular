import { Component, Input  } from '@angular/core';

@Component({
    selector: 'default-table',
    templateUrl: './default-table.component.html',
    styleUrls: ['./default-table.component.scss']
})
export class DefaultTableComponent {
    @Input() tableHead: Array<string>;
    @Input() tableBody: Array<string>;
    //ngOnInit() {
    //  debugger;
    //}
}
