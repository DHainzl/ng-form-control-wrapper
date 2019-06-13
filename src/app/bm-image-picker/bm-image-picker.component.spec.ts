import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmImagePickerComponent } from './bm-image-picker.component';

describe('BmImagePickerComponent', () => {
  let component: BmImagePickerComponent;
  let fixture: ComponentFixture<BmImagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmImagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
