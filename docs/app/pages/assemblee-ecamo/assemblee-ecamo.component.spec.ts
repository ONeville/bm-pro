import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleeEcamoComponent } from './assemblee-ecamo.component';

describe('AssembleeEcamoComponent', () => {
  let component: AssembleeEcamoComponent;
  let fixture: ComponentFixture<AssembleeEcamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleeEcamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembleeEcamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
