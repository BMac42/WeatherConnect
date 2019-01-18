import { Injectable, NgModule } from '@angular/core';
import SkyconsLibrary from 'skycons';

let Skycons = new SkyconsLibrary({});

@Injectable({
  providedIn: 'root'
})
export class SkyconsService {

  public functions = new Skycons({ color: 'white' });
  public constants = Skycons;

  constructor() { }

  getIcon(icon) {
    console.log('working with ', icon);
    return icon;
  }

  // getIcon(icon) {
  //   switch (icon) {
  //     case 'rain':
  //       return this.constants.RAIN;
  //     case 'snow':
  //       return this.constants.SNOW;
  //     case 'fog':
  //       return this.constants.FOG;
  //     case 'clear-day':
  //       return this.constants.CLEAR_DAY;
  //     case 'clear-night':
  //       return this.constants.CLEAR_NIGHT;
  //     case 'cloudy':
  //       return this.constants.CLOUDY;
  //     case 'partly-cloudy-night':
  //       return this.constants.PARTLY_CLOUDY_NIGHT;
  //     case 'partly-cloudy-day':
  //       return this.constants.PARTLY_CLOUDY_DAY;
  //     case 'snow':
  //       return this.constants.SNOW;
  //     case 'sleet':
  //       return this.constants.SLEET;
  //     case 'wind':
  //       return this.constants.WIND;
  //     default:
  //       return icon;
  //   }
  // }

}
