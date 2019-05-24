import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmbTestimonyComponent } from './wmb-testimony.component';

describe('WmbTestimonyComponent', () => {
  let component: WmbTestimonyComponent;
  let fixture: ComponentFixture<WmbTestimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmbTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmbTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
