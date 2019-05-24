import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDiversComponent } from './multimedia-divers.component';

describe('MultimediaDiversComponent', () => {
  let component: MultimediaDiversComponent;
  let fixture: ComponentFixture<MultimediaDiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaDiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
