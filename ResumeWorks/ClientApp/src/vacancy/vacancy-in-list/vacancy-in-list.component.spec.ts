import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyInListComponent } from './vacancy-in-list.component';

describe('VacancyInListComponent', () => {
  let component: VacancyInListComponent;
  let fixture: ComponentFixture<VacancyInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
