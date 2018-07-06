import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';
import { AppConfigService } from './app-config.service';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  public baseURL = this.appConfigService.getBaseUrl();

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL + `employees`, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL + `employees`);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `employees/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `employees/${_id}`);
  }

}
