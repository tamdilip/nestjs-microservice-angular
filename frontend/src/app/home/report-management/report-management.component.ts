import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.sass']
})
export class ReportManagementComponent implements OnInit {

  public activeRoute: string = 'associate-details';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['home/reports/' + this.activeRoute]);
  }

}
