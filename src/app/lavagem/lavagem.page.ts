import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Servico } from '../models/servico.model';
import { ServicosService } from '../services/servicos.service';
@Component({
  selector: 'app-lavagem',
  templateUrl: 'lavagem.page.html',
  styleUrls: ['lavagem.page.scss'],
})
export class LavagemPage implements OnInit {
  navigate: any;
  public servicoId = '';
  public servico: Servico;

  constructor(
    private menu: MenuController,
    private route: ActivatedRoute,
    private servicosService: ServicosService
  ) {
    this.sideMenu();
    this.route.queryParams.subscribe((item) => {
      this.servicoId = item.id;
    });
  }

  ngOnInit(): void {
    this.servico = this.servicosService.getServicesByID(this.servicoId);
    console.log('Serviço selecionado: ', this.servico);
  }

  // servico = {
  //   img: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fernando+Garcia/29-06+-+Como+lavar+o+carro+em+casa/Como+lavar+o+carro+em+casa4.jpg',
  //   nome: 'Lavagem',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  // };
  // servico1 = {
  //   img: 'https://www.sossaopaulo.com/wp-content/uploads/2017/04/socorro-mecanico-emergencial-sao-paulo-sos-sp.jpg',
  //   nome: 'Mecânico',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  // };
  // servico2 = {
  //   img: 'https://exame.com/wp-content/uploads/2020/06/concessionaria-veiculos-1.jpg',
  //   nome: 'Concessionária',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
  // };
  // servico3 = {
  //   img: 'https://exame.com/wp-content/uploads/2020/06/concessionaria-veiculos-1.jpg',
  //   nome: 'Concessionária',
  //   descricao:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut .',
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
}
