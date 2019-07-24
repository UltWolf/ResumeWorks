import {Component, Input, OnInit} from '@angular/core';
import {Vacancy} from "../../Models/Vacancy";

@Component({
  selector: 'app-vacancy-in-list',
  templateUrl: './vacancy-in-list.component.html',
  styleUrls: ['./vacancy-in-list.component.css']
})
export class VacancyInListComponent implements OnInit {

  @Input() public vacancy: Vacancy ;
  constructor() {
     
  }

  ngOnInit() {
  }

}
