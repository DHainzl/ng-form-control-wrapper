import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bm-image-picker',
    templateUrl: './bm-image-picker.component.html',
    styleUrls: ['./bm-image-picker.component.css']
})
export class BmImagePickerComponent {
    @Input()
    selectedImages: string[];

    @Input()
    allImages: string[];

    @Output()
    selectedImagesChange: EventEmitter<string[]> = new EventEmitter();

    changeSelection = false;
    tempSelectedImages: string[] = [];

    openSelectionChange() {
        this.tempSelectedImages = this.selectedImages.map(x => x);
        this.changeSelection = true;
    }

    toggleImage(image: string, shouldAdd: boolean) {
        const isAdded = this.tempSelectedImages.indexOf(image) !== -1;

        if (shouldAdd && !isAdded) {
            this.tempSelectedImages.push(image);
        } else if (!shouldAdd && isAdded) {
            this.tempSelectedImages = this.tempSelectedImages.filter(i => i !== image);
        }
    }

    cancelSelectionChange() {
        this.tempSelectedImages = [];
        this.changeSelection = false;
    }

    saveSelection() {
        this.selectedImages = this.tempSelectedImages.map(x => x);
        this.selectedImagesChange.emit(this.selectedImages);
        this.changeSelection = false;
    }
}
