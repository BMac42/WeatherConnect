import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import {Weather, DayForecast, WeekDay} from '../../interfaces/weather';
import { formatDate, CommonModule } from '@angular/common';


const daysObject = [1, 2, 3, 4, 5];
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  forecasts: DayForecast[];
  @Input() weekWeather: Weather;
  day: any;
  date: Date;
  weekDay: WeekDay;

  days: any[];
  daysTempHi: any[];
  daysTempLow: any[];
  daysIcon: any;


  constructor() {
    this.days = daysObject.map((i) => this.weekDates(i));
  }

  /* check if weekWeather @Input is loaded in component yet (is undefined when called in constructor) */
  ngOnInit() {
    if (this.weekWeather) {
      this.daysTempHi = daysObject.map((_) => this.weekTempHi(_));
      this.daysTempLow = daysObject.map((_) => this.weekTempLow(_));
      this.daysIcon = daysObject.map((_) => this.weekIcon(_));

      console.log(this.weekWeather);
    }
  }

   weekDates(day) {
     this.date = new Date();
     this.date.setDate(this.date.getDate() + day);
     return this.day = this.date;
  }

  weekTempHi(day){
     return this.weekWeather.daily.data[day].apparentTemperatureHigh;
  }

  weekTempLow(day){
    return this.weekWeather.daily.data[day].apparentTemperatureLow;
  }

  weekIcon(day){
    return this.weekWeather.daily.data[day].icon.replace(/-/g, '_').toUpperCase();
  }




}
