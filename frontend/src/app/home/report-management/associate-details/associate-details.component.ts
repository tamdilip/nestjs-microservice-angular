import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { API } from '../../../app.endpoints';
import { ReportService } from '../../../services/report.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-associate-details',
  templateUrl: './associate-details.component.html',
  styleUrls: ['./associate-details.component.sass']
})
export class AssociateDetailsComponent implements OnInit {

  percentDone: number;
  uploadSuccess: boolean;
  selectedFile: File;

  elements: any;
  headElements = ['Associate ID', 'Name', 'Designation', 'Location', 'BU'];

  constructor(
    private http: HttpClient,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getAssociates()
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
