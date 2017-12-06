import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions(this.headers);
  headers2 = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age': '1728000',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
    'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
  });

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(`/languages`);
  }

  // getEmployee(userID: string): Observable<any> {
  //   return this.http.get(`/employee/${userID}`).map(res => res.json());
  // }
  //
  // addEmployee(employee): Observable<any> {
  //   return this.http.post('/employee', JSON.stringify(employee), this.options);
  // }
  //
  // editEmployee(employee): Observable<any> {
  //   return this.http.put(`/employee/${employee.userID}`, JSON.stringify(employee), this.options);
  // }
  //
  // deleteEmployee(employee): Observable<any> {
  //   return this.http.delete(`/employee/${employee.userID}`, this.options);
  // }

}
