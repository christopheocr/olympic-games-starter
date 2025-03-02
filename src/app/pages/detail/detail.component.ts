import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailPageService } from 'src/app/core/services/detail-page.service';
import { TitleCustomComponent } from "../../components/title-custom/title-custom.component";
import { InfoBarComponent } from "../../components/info-bar/info-bar.component";
import { DiagrammeComponent } from "../../components/diagramme/diagramme.component";
import { ButtonCustomComponent } from "../../components/button-custom/button-custom.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule,TitleCustomComponent, InfoBarComponent, DiagrammeComponent, ButtonCustomComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  countryName: string = '';
  validCountry: boolean = false;
  countryStatistics$: Observable<{
    totalParticipations: number,
    totalMedals: number,
    totalAthletes: number,
    countryData: { name: string; series: { name: string; value: number }[] } | null
  }> | null = null;
  infoBarData: { title: string, value: number }[]  = [];

  constructor(private route: ActivatedRoute, private router: Router,private detailService: DetailPageService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const countryNameParam = params.get('countryName');
      if (!countryNameParam) {
        this.router.navigate(['/not-found']);
        return;
      }

      this.detailService.getAllCountries().subscribe(countries => {
        // Trouver le pays exact avec son nom original
        const matchedCountry = countries.find(c =>
          c.toLowerCase().replace(/\s+/g, '') === countryNameParam.toLowerCase().replace(/\s+/g, '')
        );

        if (!matchedCountry) {
          this.router.navigate(['/not-found']);
          return;
        }

        this.countryName = matchedCountry;
        this.validCountry = true;

        // Charger les statistiques du pays
        this.countryStatistics$ = this.detailService.getCountryStatistics(this.countryName);

        this.countryStatistics$.subscribe(stats => {
          if (stats) {
            this.infoBarData = [
              { title: 'Number of entries', value: stats.totalParticipations },
              { title: 'Total number of medals', value: stats.totalMedals },
              { title: 'Total number of athletes', value: stats.totalAthletes }
            ];
          }
        });
      });
    });
  }

}
