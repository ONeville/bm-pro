import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShekinakPubComponent } from './shekinak-pub.component';

describe('ShekinakPubComponent', () => {
  let component: ShekinakPubComponent;
  let fixture: ComponentFixture<ShekinakPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShekinakPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShekinakPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
