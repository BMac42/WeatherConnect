import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // getGoogle(lat, lng) {
  //   return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBAQ09H6mx4rW10kArm5nRpn-IPUqXLZMg`)
  //     .pipe(map((res) => res));
  // }

  getWeather(lat, lng): Observable<Weather> {
    return this.http.get
      (`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/58dc7954c2a0728421d68a3a89f3dc55/${lat},${lng}`)
      .pipe(map((res: Weather) => res));
  }

}
