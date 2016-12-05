import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    @Input() paginationData: Array<string>;
    @Input() n: number;
    @Output() onPageChange = new EventEmitter();
    private parts: Array<number>;
    private partsN: number;
    private selectedPart = 0;
    private splittedData: Array<Array<Array<string>>>;


    ngOnInit() {
        this.partsN = Math.ceil(this.paginationData.length / this.n);
        let arr = Array(this.partsN).fill(0);
        arr.forEach(function(elem, index){
            arr[index] = index + 1;
        });
        this.parts = arr;
        this.splittedData = this.splitData();
        this.onPageChange.emit(this.splittedData[this.selectedPart]);
    }

    changPage($event) {
        this.selectedPart = $event.target.innerHTML - 1;
        this.onPageChange.emit(this.splittedData[this.selectedPart]);
    }

    prevPage() {
        if (this.selectedPart){
            this.selectedPart -= 1;
            this.onPageChange.emit(this.splittedData[this.selectedPart]);
        }
    }

    nextPage() {
        if (this.selectedPart < this.partsN - 1){

            this.selectedPart += 1;
            this.onPageChange.emit(this.splittedData[this.selectedPart]);
        }
    }

    setActive(n) {
        if (n-1 === this.selectedPart){
            return 'active'
        }
    }

    private splitData() {
        let n = this.n;
        let splitedArr = [];

        for (let i = 0; i < this.partsN; i++) {
            splitedArr.push([])
        }
        this.paginationData.forEach(function (value, index) {
            let part: number = Math.floor(index / n);
            splitedArr[part].push(value);
        });
        return splitedArr;
    }





}