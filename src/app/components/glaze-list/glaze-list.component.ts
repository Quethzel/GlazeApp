import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Glaze } from 'src/app/models/glaze';
import { GlazeService } from 'src/app/services/glaze.service';

@Component({
  selector: 'app-glaze-list',
  templateUrl: './glaze-list.component.html',
  styleUrls: ['./glaze-list.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class GlazeListComponent  implements OnInit {
  glazes: Glaze[] = [];

  constructor(private navCtrl: NavController, private glazeService: GlazeService) {
    this.glazes = this.glazeService.getAllGlazes();
  }

  ngOnInit() {}


  goToDetail(glazeId: string) {
    this.navCtrl.navigateForward(`/tabs/tab2/${glazeId}`);
  }

}
