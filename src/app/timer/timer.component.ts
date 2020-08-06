import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import moment from 'moment';
const moment_ = moment;


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // moments = moment();
  timeNow;
  constructor() { }

  ngOnInit() {
    this.timeNow = moment_().format('DD MM YYYY');
  }

}
