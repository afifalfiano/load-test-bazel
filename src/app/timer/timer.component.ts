import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import * as moment_ from 'moment';
const moment = moment_;


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
    this.timeNow = moment.format('LLLL');
  }

}
