import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import * as moment from 'moment';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // moment : moment;
  timeNow: string = moment().format('LLLL');
  constructor() { }

  ngOnInit() {
  }

}
