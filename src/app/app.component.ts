import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData?: WeatherData;
  cityName: string = "Edmonton";
  background?: string;

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  determineBackground(): string {
    const dateString: any = this.weatherData?.location.localtime;
    const dateObj = new Date(dateString);
    const hours = dateObj.getHours();

    console.log("HOURS: ", hours)
    if (hours < 7) {
      return "night";
    } else {
      return "day";
    }
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        this.background = this.determineBackground();
        console.log("BACKGROUND: ", this.background)
        console.log(response);
      }
    })
  }
}
