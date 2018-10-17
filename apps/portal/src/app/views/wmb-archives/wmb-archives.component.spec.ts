import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmbArchivesComponent } from './wmb-archives.component';

describe('WmbArchivesComponent', () => {
  let component: WmbArchivesComponent;
  let fixture: ComponentFixture<WmbArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmbArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmbArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
