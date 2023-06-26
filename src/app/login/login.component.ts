import { Component, OnInit } from '@angular/core';
import { CallApiServiceService } from '../call-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public geteventList: CallApiServiceService) {}

  ngOnInit() {
    this.getEvent();
  }
  eventList: any[];
  getEvent() {
    this.geteventList.getListOfEvents().subscribe((res: any) => {
      // if (res['status']) {
      this.eventList = res['list'];
      // }
    });
  }
}
