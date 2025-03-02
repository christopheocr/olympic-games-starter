import { Injectable } from '@angular/core';
import { OlympicService } from './olympic.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private olympicService: OlympicService) { }

  getDataForHomePage(): Observable<{
    data: { name: string; value: number }[];
    totalOlympics: number;
    totalCountries: number;
  }> {
    return this.olympicService.getOlympics().pipe(
      map((olympics) => {
        if (!olympics || olympics.length === 0) {
          return {
            data: [],
            totalOlympics: 0,
            totalCountries: 0,
          };
        }

        const totalCountries = olympics.length;
        const uniqueOlympicYears = new Set<number>();
        const medalsByCountry: { [country: string]: number } = {};

        for (const olympic of olympics) {
          if (olympic.participations) {
            for (const participation of olympic.participations) {
              uniqueOlympicYears.add(participation.year);
              medalsByCountry[olympic.country] = (medalsByCountry[olympic.country] || 0) + participation.medalsCount;
            }
          }
        }

        const data = Object.entries(medalsByCountry).map(([name, value]) => ({ name, value }));

        return {
          data,
          totalOlympics: uniqueOlympicYears.size,
          totalCountries,
        };
      })
    );
  }
}
