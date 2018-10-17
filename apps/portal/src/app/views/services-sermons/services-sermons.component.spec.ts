import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSermonsComponent } from './services-sermons.component';

describe('ServicesSermonsComponent', () => {
  let component: ServicesSermonsComponent;
  let fixture: ComponentFixture<ServicesSermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
