import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Estabelecimento } from '../models/estabelecimento.model';
import { ServicosService } from '../services/servicos.service';
@Component({
	selector: 'app-lavagem',
	templateUrl: 'lavagem.page.html',
	styleUrls: ['lavagem.page.scss'],
})
export class LavagemPage implements OnInit {
	navigate: any;
	public servicoId = '';
	public servicoNome = '';
	public estabelecimentos: Estabelecimento[] = [];
	public img: string;

	constructor(private menu: MenuController, private route: ActivatedRoute, private servicosService: ServicosService) {
		this.sideMenu();
		this.route.queryParams.subscribe((item) => {
			this.servicoId = item.id;
			this.servicoNome = item.nome;
			this.getEstabelecimento();
		});
	}

	public getEstabelecimento(): any {
		this.img = this.servicosService.imagensLocais;

		this.servicosService.getEstabelecimentoByServicoID(this.servicoId).subscribe((item) => {
			item.rows.forEach((element) => {
				element.img = this.img;
				this.estabelecimentos.push(element);
			});
		});
	}

	ngOnInit(): void {
		// this.servico = this.servicosService.getServicesByID(this.servicoId);
		// console.log('Serviço selecionado: ', this.servico);
	}

	sideMenu() {
		this.navigate = [
			{
				title: 'Home',
				url: '/home',
				icon: 'home',
			},
		];
	}
}
