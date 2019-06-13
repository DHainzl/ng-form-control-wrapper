import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BmImagePickerComponent } from './bm-image-picker/bm-image-picker.component';
import { BmImagePickerControlComponent } from './bm-image-picker-control/bm-image-picker-control.component';

@NgModule({
    declarations: [
        AppComponent,
        BmImagePickerComponent,
        BmImagePickerControlComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
