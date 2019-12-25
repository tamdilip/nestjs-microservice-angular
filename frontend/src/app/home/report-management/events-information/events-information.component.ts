import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { API } from '../../../app.endpoints';
import { ReportService } from '../../../services/report.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-events-information',
  templateUrl: './events-information.component.html',
  styleUrls: ['./events-information.component.sass']
})
export class EventsInformationComponent implements OnInit {

  percentDone: number;
  uploadSuccess: boolean;
  selectedFile: File;

  elements: any;
  headElements = ['Event ID', 'Base Location', 'Beneficiary Name', 'Council Name', 'Event Name', 'Event Description','Event Date', 'Employee ID', 'Employee Name', 'Volunteer Hours', 'Travel Hours', 'Lives Impacted', 'Business Unit', 'Status', 'IIEP Category'];

  constructor(
    private http: HttpClient,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getEventsInformation()
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
