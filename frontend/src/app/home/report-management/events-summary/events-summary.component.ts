import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { API } from '../../../app.endpoints';
import { ReportService } from '../../../services/report.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-events-summary',
  templateUrl: './events-summary.component.html',
  styleUrls: ['./events-summary.component.sass']
})
export class EventsSummaryComponent implements OnInit {

  percentDone: number;
  uploadSuccess: boolean;
  selectedFile: File;

  elements: any;
  headElements = ['Event ID',	'Month','Base Location','Beneficiary Name','Venue Address','Council Name','Project','Category','Event Name','Event Description','Event Date','Total volunteers','Total Volunteer Hours','Total Travel Hours','Overall Volunteering Hours','Lives Impacted','Activity Type','Status','POC ID','POC Name','POC Contact Number'];

  constructor(
    private http: HttpClient,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getEventsSummary()
      .pipe(first())
      .subscribe(
      data => {
        this.elements = data;
      },
      error => {
        console.log(error);
      });
  }


  uploadReport() {
    this.uploadAndProgressSingle(this.selectedFile);
  }

  updatedSelectedFile(files: FileList) {
    this.uploadSuccess = false;
    if (files.length == 0) {
      console.log("No file selected!");
      return
    }
    this.selectedFile = files[0];
  }

  uploadAndProgressSingle(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post(API.REPORT_UPLOAD, formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }

}
