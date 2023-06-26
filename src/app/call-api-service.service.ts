import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CallApiServiceService {
  constructor(public httpClient: HttpClient) {}
  url: string = 'https://api.hdor.com/reports/reports/event';
  getListOfEvents() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    headers = headers.append('Application', 'web');
    let options = { headers: headers };

    return this.httpClient.get(this.url, options);
  }
}
export class EventList {
  eventDistance: any;
  endDate: any;
  name: any;
  id: number;
  urlPattern: any;
  eventType: number;
  reportStatic: any;
  startDate: any;
}
