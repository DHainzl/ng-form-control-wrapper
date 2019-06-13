import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-bm-image-picker-control',
    templateUrl: './bm-image-picker-control.component.html',
    styleUrls: ['./bm-image-picker-control.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BmImagePickerControlComponent),
            multi: true,
        },
    ]
})
export class BmImagePickerControlComponent implements ControlValueAccessor {
    @Input()
    allImages: string[];

    value: string[];

    onChangeFn: (images: string[]) => void;
    onTouchedFn: () => void;

    selectedImagesChange(newImages: string[]) {
        this.value = newImages;

        this.callTouched();
        this.callChange(newImages);
    }

    callTouched() {
        if (this.onTouchedFn) {
            this.onTouchedFn();
        }
    }

    callChange(images: string[]) {
        if (this.onChangeFn) {
            this.onChangeFn(images);
        }
    }

    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        // Ignored for now
    }
}
