import { Component } from '@angular/core';

@Component({
    selector: 'component',
    templateUrl: 'contacts.component.html',
})

export class ContactsComponent {
    isDone: boolean = false;

    ngOnInit(){
        interface SquareConfig {
            color: string;
        }

        function createSquare(config: SquareConfig) {
            let newSquare = {color: "white", area: 100};
            if (config.color) {
                // Ошибка: Property 'collor' does not exist on type 'SquareConfig'
                newSquare.color = config.color;
            }
            return newSquare;
        }
let a = {size: 10, color: "black"};
        let mySquare = createSquare(a);
    }
}