import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Glaze } from 'src/app/models/glaze';
import { GlazeService } from 'src/app/services/glaze.service';
import { SearchGlazeComponent } from '../search-glaze/search-glaze.component';
import { IonContent, IonList, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
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
export class GlazeListComponent  implements OnInit {
  glazes: Glaze[] = [];

  constructor(private navCtrl: NavController, private glazeService: GlazeService) {
    this.glazes = this.glazeService.getAllGlazes();
  }

  ngOnInit() {}

  goToDetail(glaze: Glaze) {
    this.navCtrl.navigateForward(`/tabs/tab2/${glaze.id}`);
  }

}
