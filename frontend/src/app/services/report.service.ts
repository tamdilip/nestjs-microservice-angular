import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API } from '../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getAssociates() {
    return this.http.get<any>(API.GET_ASSOCIATES)
      .pipe(map(res => res));
  }

  getEventsSummary() {
    return this.http.get<any>(API.GET_EVENTS_SUMMARY)
      .pipe(map(res => res));
  }

  getEventsInformation() {
    return this.http.get<any>(API.GET_EVENTS_INFORMATION)
      .pipe(map(res => res));
  }
}
