import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    allImages = [ 'cat', 'dog', 'horse', 'duck', 'swan', 'bird', 'hamster', 'monkey' ];

    selectedImagesDirect = [ 'cat' ];
    selectedImagesModel = [ 'dog' ];
    form = new FormGroup({
        images: new FormControl([ 'bird' ]),
    });

    ngOnInit() {
        // TODO unsubscribe
        this.form.get('images').valueChanges.subscribe(val => {
            this.selectedImagesChange('form', val);
        });
    }

    selectedImagesChange(source: string, newImages: string[]) {
        console.log('Selected images of', source, 'changed to', newImages);
    }
}
