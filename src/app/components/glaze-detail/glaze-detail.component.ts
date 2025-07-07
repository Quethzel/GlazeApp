import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Glaze } from 'src/app/models/glaze';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon,
  IonItem, IonLabel, IonList, IonText, IonNote, IonCol, IonGrid, IonRow, IonButton, 
  ModalController, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [
    CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol, IonGrid, IonRow, IonIcon, IonItem, IonLabel, IonList, IonText, IonNote,
    IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar
  ],
  selector: 'app-glaze-detail',
  templateUrl: './glaze-detail.component.html',
  styleUrls: ['./glaze-detail.component.scss'],
})
export class GlazeDetailComponent implements OnInit {
  @Input() glaze!: Glaze;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
