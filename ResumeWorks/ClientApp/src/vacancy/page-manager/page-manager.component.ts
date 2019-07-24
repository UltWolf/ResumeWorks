import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorizeService} from "../../api-authorization/authorize.service";

@Component({
    selector: 'app-page-manager',
    templateUrl: './page-manager.component.html',
    styleUrls: ['./page-manager.component.css']
})
export class PageManagerComponent implements OnInit {

    public CurrentPage: number;
    public isExistNext: boolean = false;
    public isExistPrevious: boolean = false;
    private isAuthenticated: boolean;
    @Output() goToPage = new EventEmitter();
    private NumberPage: number;
    private baseUrl: string;
    private apiUrl: string = "api/vacancy/";

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string,
                private authorizeService: AuthorizeService) {
        this.CurrentPage = 0;
        this.baseUrl = baseUrl;
        authorizeService.isAuthenticated().subscribe(result => this.isAuthenticated = result);
        this.getNumberPage();
    }

    private getNumberPage() {
        this.http.get<number>(this.baseUrl + this.apiUrl + "pageCount").subscribe(result => {
                this.NumberPage = result;
                this.UpdateState();
            }
        );
    }

    private UpdateState() {
        if (this.CurrentPage < this.NumberPage) {
            this.isExistNext = true;
        } else {
            this.isExistNext = false;
        }
        if (this.CurrentPage > 0) {
            this.isExistPrevious = true;
        } else {
            this.isExistPrevious = false;
        }
    }

    public goToNextPage() {
        this.CurrentPage += 1;
        this.goToPage.emit(this.CurrentPage);
        this.UpdateState();
    }

    public goToPreviousPage() {
        this.CurrentPage -= 1;
        this.goToPage.emit(this.CurrentPage);
        this.UpdateState();
    }

    ngOnInit() {
    }

}
