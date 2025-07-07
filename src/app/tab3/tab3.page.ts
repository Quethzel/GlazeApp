import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SettingsComponent } from '../components/settings/settings.component';
import { AccountComponent } from "../components/account/account.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SettingsComponent, AccountComponent],
})
export class Tab3Page {
  constructor() {}
}
