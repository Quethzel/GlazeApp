import { Component, OnInit } from '@angular/core';
import {
  IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList,
  IonNote, IonTextarea, IonTitle, IonToggle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { last } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports: [IonButton, 
    IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList,
    IonNote, IonTextarea, IonTitle, IonToggle, IonToolbar,
  ],
})
export class AccountComponent  implements OnInit {
  account = {
    name: 'John Doe',
    lastName: 'Doe',
    email: 'john@doe.com',
  };
  constructor() { }

  ngOnInit() {}

}
