import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDirectComponent } from './services-direct.component';

describe('ServicesDirectComponent', () => {
  let component: ServicesDirectComponent;
  let fixture: ComponentFixture<ServicesDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
