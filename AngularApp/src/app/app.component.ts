import { Component } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import { AppConfigService } from './shared/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService, AppConfigService]
})
export class AppComponent {
  title = 'app';
}
