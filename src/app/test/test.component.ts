import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {logger} from "codelyzer/util/logger";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  languages: any;

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {

  }

  click(){
    this.dataService.getEmployees().subscribe(
      next => this.languages = next,
      err => logger.error(err),
      () => console.log(this.languages)
    )
  }


}
