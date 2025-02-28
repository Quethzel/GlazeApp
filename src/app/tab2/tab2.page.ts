import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { GlazeDetailComponent } from '../components/glaze-detail/glaze-detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, GlazeDetailComponent]
})
export class Tab2Page implements OnInit {
  glazeId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.glazeId = this.route.snapshot.paramMap.get('glazeId');
    console.log(this.glazeId);
  }

}
