import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmImagePickerControlComponent } from './bm-image-picker-control.component';

describe('BmImagePickerControlComponent', () => {
  let component: BmImagePickerControlComponent;
  let fixture: ComponentFixture<BmImagePickerControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmImagePickerControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmImagePickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
