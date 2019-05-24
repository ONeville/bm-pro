import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleeStaffComponent } from './assemblee-staff.component';

describe('AssembleeStaffComponent', () => {
  let component: AssembleeStaffComponent;
  let fixture: ComponentFixture<AssembleeStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleeStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembleeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
