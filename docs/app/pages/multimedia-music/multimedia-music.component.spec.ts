import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaMusicComponent } from './multimedia-music.component';

describe('MultimediaMusicComponent', () => {
  let component: MultimediaMusicComponent;
  let fixture: ComponentFixture<MultimediaMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
