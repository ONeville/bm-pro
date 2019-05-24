import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembleeComponent } from './assemblee.component';

describe('AssembleeComponent', () => {
  let component: AssembleeComponent;
  let fixture: ComponentFixture<AssembleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
