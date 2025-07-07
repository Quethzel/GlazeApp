import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Glaze } from 'src/app/models/glaze';
import { GlazeService } from 'src/app/services/glaze.service';
import { SearchGlazeComponent } from '../search-glaze/search-glaze.component';
import { IonContent, IonList, IonItem, IonLabel, IonText, ModalController } from '@ionic/angular/standalone';
import { GlazeDetailComponent } from '../glaze-detail/glaze-detail.component';
@Component({
  standalone: true,
  selector: 'app-glaze-list',
  templateUrl: './glaze-list.component.html',
  styleUrls: ['./glaze-list.component.scss'],
  imports: [
    IonContent, IonList, IonItem, IonLabel, IonText,
    CommonModule, SearchGlazeComponent
  ]
})
export class GlazeListComponent implements OnInit {
  glazes: Glaze[] = [];

  constructor(private modalCtrl: ModalController, private glazeService: GlazeService) {
    this.glazes = this.glazeService.getAllGlazes();
  }

  ngOnInit() { }

  async openModal(glaze: Glaze) {
    const modal = await this.modalCtrl.create({
      component: GlazeDetailComponent,
      canDismiss: true,
      componentProps: {
        glaze: glaze
      }
    });
    modal.present();

    await modal.onDidDismiss();
  }

  goToDetail(glaze: Glaze) {
    this.openModal(glaze);
  }

}
