import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';

@NgModule({
    bootstrap: [
        ApplicationComponent
    ],
    declarations: [
        ApplicationComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class ApplicationModule {
}