import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
import { Servico } from 'src/app/models/servico.model';
@Component({
  selector: 'lavagem-card',
  templateUrl: 'lavagem-card.html',
  styleUrls: ['lavagem-card.scss'],
})
export class LavagemCardComponent {
  @Input() servico: Servico;
  @Input() estabelecimento: Estabelecimento;
  constructor(public router: Router) {}

  navigateForward() {
    this.router.navigate([`agendamento`], {
      queryParams: { id: this.servico.id, local: this.estabelecimento.id },
    });
  }
}
