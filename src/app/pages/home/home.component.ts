import { Olympic } from './../../core/models/Olympic';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HomePageService } from 'src/app/core/services/home-page.service';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  public olympics$: Observable<Olympic[] | null> = of(null);
  public homeData$!: Observable<{
    elements: { name: string; value: number }[];
    numberJOs: number;
    numberOfCountry: number;
  }>;

  constructor(private olympicService: OlympicService,private homeService: HomePageService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.homeData$ = this.homeService.getDataForHomePage().pipe(
      map(data => ({
        elements: data.data,
        numberJOs: data.totalOlympics,
        numberOfCountry: data.totalCountries
      }))
    );
  }
}
