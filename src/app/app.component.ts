import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './guards/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public authSer: AuthServiceService) {}
  title = 'testing-test-cases';

  ngOnInit() {
    this.authSer.authToeken = true;
  }
  showAlertWorking(res) {
    return res;
  }
}
