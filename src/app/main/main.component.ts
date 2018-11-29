import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SkyconsService } from '../services/skycons.service';
import { ApiService } from '../services/api.service';
import { compileNgModule } from '@angular/compiler';
import { Weather } from '../interfaces/weather';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('expandShrink', [
    state('expand', style({
      height: '800px',
      width: '90%',
    })),
    state('shrink', style({
      height: '500px',
      width: '65%',
    })),
    state('expandFlip', style({
      transform: 'rotate(180deg)',
    })),
    state('shrinkFlip', style({
      transform: 'rotate(0deg)'
    })),
    transition('expand => shrink', animate(300)),
    transition('shrink => expand', animate(300)),
    transition('expandFlip => shrinkFlip', animate(300)),
    transition('shrinkFlip => expandFlip', animate(1000)),
    ]),
  ]
})

export class MainComponent implements OnInit{
  @Input() finalLat: any;
  @Input() finalLng: any;
  @Input() city: string;
  showToday = true;
  weather: Weather;
  weatherIcon: string;
  currentTemp: any;
  currentDate: any;
  currentSummary: string;
  expand = false;

  constructor(private skycons: SkyconsService, private apiService: ApiService) { }

  ngOnInit() {
    console.log('test here ' this.weatherIcon);
    // get date
    this.currentDate = new Date();
    console.log(this.currentDate);
    console.log(this.skycons);
    // get weather from coords
    this.apiService.getWeather(this.finalLat, this.finalLng)
      .subscribe((res) => {
        this.weather = res;
        // print darksky api get in console
        console.log(this.weather);
        this.weatherIcon = this.weather.currently.icon.replace(/-/g, '_').toUpperCase();

        // get temp
        this.currentTemp = this.weather.currently.apparentTemperature.toString().slice(0, 2);

        // get summary
        this.currentSummary = this.weather.daily.data[0].summary;
      });
  }

  isExpand() {
  this.expand = !this.expand;
  this.showToday = !this.showToday;
  }




}
