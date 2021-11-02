import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
@Component({
	selector: 'lavagem-card',
	templateUrl: 'lavagem-card.html',
	styleUrls: ['lavagem-card.scss'],
})
export class LavagemCardComponent {
	@Input() servicoNome: string;
	@Input() servicoId: string;
	@Input() estabelecimento: Estabelecimento;
	constructor(public router: Router) {}

	navigateForward() {
		this.router.navigate([`agendamento`], {
			queryParams: { id: this.servicoId, estabelecimentoId: this.estabelecimento.id, funcionamento: this.estabelecimento.diasfuncionamento, endereco: this.estabelecimento.endereco, nome: this.estabelecimento.nome },
		});
	}
}
