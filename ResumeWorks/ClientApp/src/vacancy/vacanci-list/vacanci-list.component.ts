import {Component, Inject, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {Vacancy} from "../../Models/Vacancy";
import {AuthorizeService} from "../../api-authorization/authorize.service";
 

@Component({
  selector: 'app-vacanci-list',
  templateUrl: './vacanci-list.component.html',
  styleUrls: ['./vacanci-list.component.css']
})
export class VacanciListComponent implements OnInit {

  private baseUrl:string;
  private http:HttpClient;
  public vacancies: Vacancy[];
  constructor( http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl=baseUrl;
    this.http=http;
    this.getResult(0);
  }
  public ChangePage(page:number){
    this.getResult(page);
  }
  
  private getResult(page:number){
    this.http.get<Vacancy[]>(this.baseUrl + 'api/vacancy/'+page).subscribe(result => {
      this.vacancies = result;
    }, error => console.error(error));
  }
   
  ngOnInit() {
  }

}
