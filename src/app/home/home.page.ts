import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import SwiperCore, { Navigation } from 'swiper';
import { Servico } from '../models/servico.model';
import { ServicosService } from '../services/servicos.service';
// install Swiper modules
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

	constructor(private menu: MenuController, public router: Router, private route: ActivatedRoute, private servicosService: ServicosService) {
		this.sideMenu();
	}

	ngOnInit(): void {
		this.servicosService.listServices().subscribe((item) => {
			item.rows.forEach((element) => {
				this.servicos.push(element);
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

	// proxPagina() {
	//   this.servicos = [this.servico1, this.servico3, this.servico2];
	// }
	// antPagina() {
	//   this.servicos = [this.servico3, this.servico3, this.servico3];
	// }
	// navigateForward() {
	//   this.router.navigate([`lavagem`]);
	// }
}