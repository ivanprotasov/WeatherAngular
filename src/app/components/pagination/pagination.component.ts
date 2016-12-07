import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() amount: number;
    @Input() n: number;
    @Output() onPageChange = new EventEmitter();
    parts: number;
    partsArr: Array<number>;
    showFrom: number;
    showBefore: number;
    private selectedPart = 0;


    ngOnInit() {
        this.parts = Math.ceil(this.amount / this.n);
        let arr = Array(this.parts).fill(0);
        arr.forEach(function (elem, index) {
            arr[index] = index + 1;
        });
        this.partsArr = arr;
        this.getGap();
    }

    private getGap() {
        this.showFrom = this.selectedPart * this.n;
        this.showBefore = this.showFrom + this.n;
        if (this.showBefore > this.amount) {
            this.showBefore = this.amount
        }
    }

    private setGap() {
        this.getGap();
        this.onPageChange.emit({showFrom: this.showFrom, showBefore: this.showBefore});
    }

    changePage(pageNumber) {
        this.selectedPart = pageNumber - 1;
        this.setGap();
    }

    prevPage() {
        if (this.selectedPart) {
            this.selectedPart -= 1;
            this.setGap();
        }
    }

    nextPage() {
        if (this.selectedPart < this.parts - 1) {
            this.selectedPart += 1;
            this.setGap();
        }
    }

    setActive(n) {
        if (n - 1 === this.selectedPart) {
            return 'active'
        }
    }


}