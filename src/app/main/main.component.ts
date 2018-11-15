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
  test: any;
  @Input() finalLat: any;
  @Input() finalLng: any;
  weather: Weather;
  weatherIcon: string;

  constructor(private skycons: SkyconsService, private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.skycons);
    // get weather from coords
    this.apiService.getWeather(this.finalLat, this.finalLng)
      .subscribe((res) => {
        this.weather = res;
        this.weatherIcon = this.weather.currently.icon.replace('-', '_');
        this.skycons.functions.add('sky', this.skycons.getIcon(this.weatherIcon));
        this.skycons.functions.play();
      });
  }

}
