import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-custom-paletts',
  templateUrl: './custom-paletts.component.html',
  styleUrls: ['./custom-paletts.component.scss'],
  imports: [IonNote, IonItem, IonLabel]
})
export class CustomPalettsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
