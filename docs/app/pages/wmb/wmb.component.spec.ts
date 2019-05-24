import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmbComponent } from './wmb.component';

describe('WmbComponent', () => {
  let component: WmbComponent;
  let fixture: ComponentFixture<WmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
