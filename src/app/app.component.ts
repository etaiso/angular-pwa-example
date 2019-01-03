import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.fetchEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}
