import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  name: string;
  avatar: string;
  title: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  fetchEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }
}
