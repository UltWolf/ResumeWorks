import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "../../Models/Vacancy";
import {NgForm} from "@angular/forms";
import {AuthorizeService} from "../../api-authorization/authorize.service";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacanci-creation',
  templateUrl: './vacanci-creation.component.html',
  styleUrls: ['./vacanci-creation.component.css']
})
export class VacanciCreationComponent implements OnInit { 
  private apiUrl:string = 'api/vacancy';
  public vacancy:Vacancy = new Vacancy("","");
  private http:HttpClient; 
  private baseUrl:string;
  private id:number;
  private withPropose:boolean=false;
  
  private withRequirements:boolean=false;
  private withSkills:boolean=false;
  constructor(http: HttpClient,
              private _router:Router, 
              @Inject('BASE_URL') baseUrl: string) { 
    this.http = http;
    this.baseUrl = baseUrl;
  }

  
  ngOnInit() {
  }
  public onSubmit() {
     
      this.http.post<number>(this.baseUrl + this.apiUrl, this.vacancy).subscribe(result => {
       
        this.vacancy.id = result;
        this._router.navigateByUrl("/");
      }, error => console.error(error));
    } 
    
}
