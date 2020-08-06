import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import * as moment from 'moment';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // moments = moment();
  timeNow: any;
  constructor() { }

  ngOnInit() {
    this.timeNow = moment.format('LLLL');
  }

}
