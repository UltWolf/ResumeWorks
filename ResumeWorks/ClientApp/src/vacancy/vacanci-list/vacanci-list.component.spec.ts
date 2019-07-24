import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciListComponent } from './vacanci-list.component';

describe('VacanciListComponent', () => {
  let component: VacanciListComponent;
  let fixture: ComponentFixture<VacanciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
