import { Injectable } from '@angular/core';
import { OlympicService } from './olympic.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailPageService {

  constructor(private olympicService: OlympicService) { }

  getAllCountries(): Observable<string[]> {
    return this.olympicService.getOlympics().pipe(
      map((olympics) => {
        if (!olympics) {
          return [];
        }
        return olympics.map(o => o.country);
      })
    );
  }

  getCountryStatistics(countryName: string): Observable<{
    totalParticipations: number,
    totalMedals: number,
    totalAthletes: number,
    countryData: { name: string; series: { name: string; value: number }[] } | null
  }> {
    return this.olympicService.getOlympics().pipe(
      map((olympics) => {
        if (!olympics) {
          return {
            totalParticipations: 0,
            totalMedals: 0,
            totalAthletes: 0,
            countryData: null
          };
        }

        const countryData = olympics.find(o => o.country.toLowerCase() === countryName.toLowerCase());

        if (!countryData) {
          return {
            totalParticipations: 0,
            totalMedals: 0,
            totalAthletes: 0,
            countryData: null
          };
        }

        const totalParticipations = countryData.participations.length;
        const totalMedals = countryData.participations.reduce((sum, p) => sum + p.medalsCount, 0);
        const totalAthletes = countryData.participations.reduce((sum, p) => sum + p.athleteCount, 0);

        const formattedData = {
          name: countryData.country,
          series: countryData.participations.map(p => ({
            name: p.year.toString(),
            value: p.medalsCount
          }))
        };

        return {
          totalParticipations,
          totalMedals,
          totalAthletes,
          countryData: formattedData
        };
      })
    );
  }

}
