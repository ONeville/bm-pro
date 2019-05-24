import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaPhotoComponent } from './multimedia-photo.component';

describe('MultimediaPhotoComponent', () => {
  let component: MultimediaPhotoComponent;
  let fixture: ComponentFixture<MultimediaPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
