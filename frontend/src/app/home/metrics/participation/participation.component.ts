import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.sass']
})
export class ParticipationComponent implements OnInit {

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getAssociates()
      .subscribe(
      data => {
        this.chartDatasets = [
          { data: [data.length] }
        ];
      },
      error => {
        console.log(error);
      });
  }

  public chartType: string = 'polarArea';

  public chartDatasets: Array<any> = [
    { data: [0] }
  ];

  public chartLabels: Array<any> = ['Head count'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
        'rgba(0, 165, 2, 0.1)',
        'rgba(255, 195, 15, 0.2)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.3)'
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
        'rgba(0, 165, 2, 0.2)',
        'rgba(255, 195, 15, 0.3)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.4)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

}
