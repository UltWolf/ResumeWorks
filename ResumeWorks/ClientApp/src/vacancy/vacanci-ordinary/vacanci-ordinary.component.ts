import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "../../Models/Vacancy";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router"
import {AuthorizeService} from "../../api-authorization/authorize.service";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-vacanci-ordinary',
    templateUrl: './vacanci-ordinary.component.html',
    styleUrls: ['./vacanci-ordinary.component.css']
})
export class VacanciOrdinaryComponent implements OnInit {

    public vacancy: Vacancy;
    public isEdit: boolean = false;
    private id: number;
    private http: HttpClient;
    private isAuthor: boolean = false;
    private baseUrl: string;
    private username: string;
    private apiUrl: string = 'api/Vacancy/';

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, 
                private activateRoute: ActivatedRoute, 
                private router: Router, 
                private authorizeService: AuthorizeService) {
        this.username = localStorage.getItem("token");
        this.http = http;
        this.baseUrl = baseUrl;

        this.activateRoute.params.subscribe(params => this.id = params['id']);
        http.get<Vacancy>(baseUrl + this.apiUrl + "Instance/" + this.id).subscribe(result => {
            this.vacancy = result;
            if (this.authorizeService.isAuthenticated()) {
                authorizeService.getUser().pipe(map(u => u && u.name)).subscribe(
                    result => { 
                        if (this.vacancy.authorEmail == result) {
                            console.log(this.vacancy.authorEmail);
                            console.log(result);
                            this.isAuthor = true;
                        }
                    });
            }
        }, error => console.error(error));

    }

    ngOnInit() {

    }

    public Update() {
        this.isEdit = false;
        this.http.put(this.baseUrl + this.apiUrl, this.vacancy).subscribe(result => {
        }, error => console.error(error));
    }

    public Delete() {
        this.http.post(this.baseUrl + this.apiUrl + "delete", this.vacancy).subscribe(result => {
        }, error => console.error(error));
        console.log(this.baseUrl);
        this.router.navigateByUrl("/");
    }
}
