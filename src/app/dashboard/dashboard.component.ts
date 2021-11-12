import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  getSession() {
    this.session.getNewSession();
  }

}
