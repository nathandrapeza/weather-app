import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from './api-key'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl : string = "https://weatherapi-com.p.rapidapi.com/current.json";
  X_RapidAPI_Host : string = "weatherapi-com.p.rapidapi.com";
  X_RapidAPI_Key : string = API_KEY;

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    this.http.get(this.baseUrl, {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', this.X_RapidAPI_Key)
        .set('X-RapidAPI-Host', this.X_RapidAPI_Host),
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}
