import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciCreationComponent } from './vacanci-creation.component';

describe('VacanciCreationComponent', () => {
  let component: VacanciCreationComponent;
  let fixture: ComponentFixture<VacanciCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
