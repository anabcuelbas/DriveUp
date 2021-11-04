import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
@Component({
	selector: 'lavagem-card',
	templateUrl: 'lavagem-card.html',
	styleUrls: ['lavagem-card.scss'],
})
export class LavagemCardComponent implements OnInit {
	@Input() servicoNome: string;
	@Input() servicoId: string;
	@Input() estabelecimento: Estabelecimento;

	constructor(public router: Router) {}

	ngOnInit(): void {}

	navigateForward() {
		this.router.navigate([`agendamento`], {
			queryParams: {
				id: this.servicoId,
				estabelecimentoId: this.estabelecimento.id,
				endereco: this.estabelecimento.endereco,
				nome: this.estabelecimento.nome,
				servicoNome: this.servicoNome,
			},
		});
	}
}
