import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
// import { IonicModule } from '@ionic/angular';
import { Glaze } from 'src/app/models/glaze';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonItem, IonLabel, IonList, IonText, IonNote
 } from '@ionic/angular/standalone';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol, IonGrid, IonRow,
    IonIcon,
    IonItem, IonLabel, IonList,
    IonText, IonNote
  ],
  selector: 'app-glaze-detail',
  templateUrl: './glaze-detail.component.html',
  styleUrls: ['./glaze-detail.component.scss'],
})
export class GlazeDetailComponent  implements OnInit {
  @Input() glaze!: Glaze;
  
  constructor() {
  }

  ngOnInit() {}

}
