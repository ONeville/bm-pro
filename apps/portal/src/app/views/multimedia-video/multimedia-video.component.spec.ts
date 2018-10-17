import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaVideoComponent } from './multimedia-video.component';

describe('MultimediaVideoComponent', () => {
  let component: MultimediaVideoComponent;
  let fixture: ComponentFixture<MultimediaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
