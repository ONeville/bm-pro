import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleePastorComponent } from './assemblee-pastor.component';

describe('AssembleePastorComponent', () => {
  let component: AssembleePastorComponent;
  let fixture: ComponentFixture<AssembleePastorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleePastorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembleePastorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
