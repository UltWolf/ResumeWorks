import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciListComponent } from './vacanci-list/vacanci-list.component';
import { VacanciOrdinaryComponent } from './vacanci-ordinary/vacanci-ordinary.component';
import { VacanciCreationComponent } from './vacanci-creation/vacanci-creation.component';
import { VacancyInListComponent } from './vacancy-in-list/vacancy-in-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageManagerComponent } from './page-manager/page-manager.component';

@NgModule({
  declarations: [VacanciListComponent, VacanciOrdinaryComponent, VacanciCreationComponent, VacancyInListComponent, PageManagerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VacancyModule { }
