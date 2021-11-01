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
  public servicos: Servico[];

  constructor(
    private menu: MenuController,
    public router: Router,
    private route: ActivatedRoute,
    private servicosService: ServicosService
  ) {
    this.sideMenu();
  }

  ngOnInit(): void {
    this.servicos = this.servicosService.listServices();
  }

  // servico = {
  //   img: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fernando+Garcia/29-06+-+Como+lavar+o+carro+em+casa/Como+lavar+o+carro+em+casa4.jpg',
  //   nome: 'Lavagem',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  //   id: '0',
  // };
  // servico1 = {
  //   img: 'https://www.sossaopaulo.com/wp-content/uploads/2017/04/socorro-mecanico-emergencial-sao-paulo-sos-sp.jpg',
  //   nome: 'Mecânico',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  //   id: '1',
  // };
  // servico2 = {
  //   img: 'https://exame.com/wp-content/uploads/2020/06/concessionaria-veiculos-1.jpg',
  //   nome: 'Concessionária',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  //   id: '2',
  // };
  // servico3 = {
  //   img: 'https://exame.com/wp-content/uploads/2020/06/concessionaria-veiculos-1.jpg',
  //   nome: 'Concessionária',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  //   id: '3',
  // };
  // servicos = [this.servico, this.servico1, this.servico2];
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
