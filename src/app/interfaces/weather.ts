import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Weather {
  alerts: Alert[];
  currently: Currently;
  daily: Data<DayForecast[]>;
}

// export interface Location {
//   latitude: any;
//   longitude: any;
// }

export interface Alert {
  description: string;
  expires: number;
  regions: string[];
  severity: string;
  time: number;
  title: string;
}

export interface Currently {
  apparentTemperatureHigh: number;
  apparentTemperatureLow: number;
  apparentTemperature: number;
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  icon: string;
  nearestStormDistance: number;
  ozone: number;
  precipIntensity: number;
  precipIntensityError: number;
  precipProbability: number;
  precipType: string;
  pressure: number;
  summary: string;
  temperature: number;
  time: number;
  uvIndex: number;
  visibility: number;
  windBearing: number;
  windGust: number;
  windSpeed: number;
}

interface Data<T> {
  data: T;
}

export interface DayForecast {
  date: any;
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  uvIndex: number;
  humidity: number;
  precipProbability: number;
  apparentTemperatureHigh: number;
  apparentTemperatureLow: number;
}
