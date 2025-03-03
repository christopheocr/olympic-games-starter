import { Injectable } from '@angular/core';
import { OlympicService } from './olympic.service';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailPageService {

  constructor(private olympicService: OlympicService) { }

  getCountryStatistics(countryName: string): Observable<{
    country: string;
    totalParticipations: number;
    totalMedals: number;
    totalAthletes: number;
    countryData: { name: string; series: { name: string; value: number }[] } | null;
}> {
    return this.olympicService.getOlympics().pipe(
      filter(olympics => !!olympics),
        map((olympics) => {

            // Normalisation du nom du pays en minuscules sans espaces
            const formattedCountryName = countryName.toLowerCase().replace(/\s+/g, '');

            const countryData = olympics.find(o =>
                o.country.toLowerCase().replace(/\s+/g, '') === formattedCountryName
            );

            if (!countryData) {
                return {
                    country: countryName,
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
                country: countryData.country,
                totalParticipations,
                totalMedals,
                totalAthletes,
                countryData: formattedData
            };
        })
    );
}


}
