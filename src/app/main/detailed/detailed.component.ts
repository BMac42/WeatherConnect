import { Component, OnInit, AfterViewInit, ElementRef, Inject, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  todayGraph = false;
  @Input() dailyWeather: Weather;
  @Input() detailLat: number;
  @Input() detailLng: number;
  @Input() todayDate: string;

  constructor() { }

  ngOnInit(){

  }
  }


