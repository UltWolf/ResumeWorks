import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciOrdinaryComponent } from './vacanci-ordinary.component';

describe('VacanciOrdinaryComponent', () => {
  let component: VacanciOrdinaryComponent;
  let fixture: ComponentFixture<VacanciOrdinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciOrdinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciOrdinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
