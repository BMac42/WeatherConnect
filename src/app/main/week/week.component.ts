import { Component, OnInit } from '@angular/core';
import {Weather, DayForecast} from '../../interfaces/weather';
import { formatDate, CommonModule } from '@angular/common';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  forecasts: DayForecast[];
  date: Date;
  days: any[];

  constructor() {
    const daysObject = [1, 2, 3, 4, 5, 6, 7];
    this.days = daysObject.map((_) => this.weekDates(_));
  }

  ngOnInit() {
  }

   weekDates(day) {
     this.date = new Date();
     this.date.setDate(this.date.getDate() + day);
     return this.date;
  }




}
