import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiaComponent } from './audia.component';

describe('AudiaComponent', () => {
  let component: AudiaComponent;
  let fixture: ComponentFixture<AudiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
