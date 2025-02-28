import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glaze-list',
  templateUrl: './glaze-list.component.html',
  styleUrls: ['./glaze-list.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class GlazeListComponent  implements OnInit {
  glazes = [
    { id: '0000', name: 'Azul Cobalto' },
    { id: '000A', name: 'Verde Esmeralda' },
    { id: '003B', name: 'Rojo Carmesí' },
    { id: 'FFFF', name: 'Arena de Mar' }
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}


  goToDetail(glazeId: string) {
    this.navCtrl.navigateForward(`/tabs/tab2/${glazeId}`);
  }

}
