import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  countryNameParam!: string;
  countryStatistics!:{
    country: string;
    totalParticipations: number,
    totalMedals: number,
    totalAthletes: number,
    countryData: { name: string; series: { name: string; value: number }[] } | null
  } | null;


  constructor(private route: ActivatedRoute, private router: Router,private detailService: DetailPageService){}

  ngOnInit(): void {
    this.countryNameParam = this.route.snapshot.paramMap.get('countryName') || '';

    this.detailService.getCountryStatistics(this.countryNameParam).subscribe(data => {
      if (!data.countryData) {
          console.error("Pays introuvable");
          this.router.navigate(['/not-found']);
         return;
      } else {
          console.log("Données trouvées :", data);
          this.countryStatistics = data;
      }
  });

  }

}
