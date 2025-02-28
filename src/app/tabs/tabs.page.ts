import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sparklesOutline, restaurantOutline, fileTrayFullOutline, albumsOutline, documentOutline, colorPaletteOutline, colorFilterOutline, cogOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ sparklesOutline, restaurantOutline, fileTrayFullOutline, albumsOutline, documentOutline, colorPaletteOutline, colorFilterOutline, cogOutline });
  }
}
