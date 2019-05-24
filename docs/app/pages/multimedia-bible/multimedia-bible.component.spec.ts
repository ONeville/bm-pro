import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaBibleComponent } from './multimedia-bible.component';

describe('MultimediaBibleComponent', () => {
  let component: MultimediaBibleComponent;
  let fixture: ComponentFixture<MultimediaBibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaBibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
