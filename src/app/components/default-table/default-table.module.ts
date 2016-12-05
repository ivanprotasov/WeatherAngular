import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DefaultTableComponent } from './default-table.component.ts';

@NgModule({
    declarations: [
        DefaultTableComponent
    ],
    imports: [BrowserModule],
    bootstrap: [DefaultTableComponent]
})
export class DefaultTableModule {
}
