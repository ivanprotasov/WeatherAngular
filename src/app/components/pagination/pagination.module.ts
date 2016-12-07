import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component.ts';

@NgModule({
    declarations: [
        PaginationComponent
    ],
    imports: [BrowserModule],
    bootstrap: [PaginationComponent]
})

export class PaginationModule {
}
