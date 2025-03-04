import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Glaze } from 'src/app/models/glaze';

@Component({
  standalone: true,
  imports: [IonicModule],
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
