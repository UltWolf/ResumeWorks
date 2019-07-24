import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import {VacanciListComponent} from "../vacancy/vacanci-list/vacanci-list.component";
import {VacancyModule} from "../vacancy/vacancy.module";
import {VacanciCreationComponent} from "../vacancy/vacanci-creation/vacanci-creation.component";
import {VacanciOrdinaryComponent} from "../vacancy/vacanci-ordinary/vacanci-ordinary.component";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VacancyModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: VacanciListComponent, pathMatch: 'full' },
      { path: 'vacancies/:page',component:VacanciListComponent},
      { path: 'vacancy/create', component: VacanciCreationComponent, canActivate:[AuthorizeGuard]},
      { path: 'vacancy/:id', component: VacanciOrdinaryComponent} 
      
       
    ]),
     
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
