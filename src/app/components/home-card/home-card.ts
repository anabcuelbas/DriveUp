import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'home-card',
  templateUrl: 'home-card.html',
  styleUrls: ['home-card.scss'],
})
export class HomeCardComponent {
@Input() servico: any;
  constructor() {}
}
