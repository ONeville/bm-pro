import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleeMorijahComponent } from './assemblee-morijah.component';

describe('AssembleeMorijahComponent', () => {
  let component: AssembleeMorijahComponent;
  let fixture: ComponentFixture<AssembleeMorijahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleeMorijahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembleeMorijahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
