import { Component, OnInit, Input } from '@angular/core';
import { SkyconsService } from '../services/skycons.service';
import { ApiService } from '../services/api.service';
import { compileNgModule } from '@angular/compiler';
import { Weather } from '../interfaces/weather';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() finalLat: any;
  @Input() finalLng: any;
  @Input() city: string;
  weather: Weather;
  weatherIcon: string;
  currentTemp: any;
  currentDate: any;
  currentSummary: string;

  constructor(private skycons: SkyconsService, private apiService: ApiService) { }

  ngOnInit() {
    // get date
    this.currentDate = new Date();
    console.log(this.currentDate);
    console.log(this.skycons);
    // get weather from coords
    this.apiService.getWeather(this.finalLat, this.finalLng)
      .subscribe((res) => {
        this.weather = res;
        console.log(this.weather);
        this.weatherIcon = this.weather.currently.icon.replace(/-/g, '_').toUpperCase();
        this.skycons.functions.add('sky', this.skycons.getIcon(this.weatherIcon));
        this.skycons.functions.play();

        // get temp
        this.currentTemp = this.weather.currently.apparentTemperature.toString().slice(0, 2);

        // get summary
        this.currentSummary = this.weather.daily.data[0].summary;
      });
  }


}
