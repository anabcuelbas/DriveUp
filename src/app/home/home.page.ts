import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import SwiperCore, { Navigation } from 'swiper';
import { Servico } from '../models/servico.model';
import { ServicosService } from '../services/servicos.service';
SwiperCore.use([Navigation]);

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
	navigate: any;
	public servicos: Servico[] = [];
	public img: string[] = [];

	constructor(private menu: MenuController, public router: Router, private route: ActivatedRoute, private servicosService: ServicosService) {
		this.sideMenu();
	}

	ngOnInit(): void {
		var count = 0;
		this.img = this.servicosService.imagensServicos;

		this.servicosService.listServices().subscribe((item) => {
			item.rows.forEach((element) => {
				element.img = this.img[count];
				this.servicos.push(element);
				count++;
			});
		});
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
