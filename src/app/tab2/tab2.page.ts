import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { GlazeService } from '../services/glaze.service';
import { Glaze } from '../models/glaze';
import { CustomPalettsComponent } from "../components/custom-paletts/custom-paletts.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CustomPalettsComponent]
})
export class Tab2Page implements OnInit {
  glazeId: string | null = null;
  glaze: Glaze | undefined;

  constructor(private route: ActivatedRoute, private glazeService: GlazeService) { }

  ngOnInit() {
    if (this.route && this.route.snapshot && this.route.snapshot.paramMap 
      && this.route.snapshot.paramMap.get('glazeId')) {
      
        this.glazeId = this.route.snapshot.paramMap.get('glazeId');

        if (this.glazeId) {
          this.glaze = this.glazeService.getGlazeById(this.glazeId);
          console.log(this.glaze);
        }

    }
    
    
  }

}
