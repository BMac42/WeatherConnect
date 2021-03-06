import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule, DoCheck, Input } from '@angular/core';
import { ApiService } from './services/api.service';
import { Weather } from './interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-connect';
  posit: any;
  lat = false;
  lng = false;
  weatherResponse: any;
  cityResponse: any;
  formattedCity: string;
  weather: Weather;
  weatherIcon: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    /* grab coordinates from users location */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.posit = position);
    }
  }

  ngDoCheck() {
    /* if coords are pulled */
    if (this.posit) {
      this.getLocationInfo(this.posit);
    }
  }

  getLocationInfo(position) {
    /* if statement to prevent infinite loop */
    if (this.lat === false){
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    }
  }


}


