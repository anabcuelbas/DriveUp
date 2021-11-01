import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Agendamento } from '../models/agendamento.model';
import { Estabelecimento } from '../models/estabelecimento.model';
import { Servico } from '../models/servico.model';
import { Tipo } from '../models/tipo-servico.model';
import { ServicosService } from '../services/servicos.service';
@Component({
  selector: 'app-agendamento',
  templateUrl: 'agendamento.page.html',
  styleUrls: ['agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  navigate: any;
  public servicoId = '';
  public estabelecimentoId = '';
  public servico: Servico;
  public estabelecimento: Estabelecimento;
  public form!: FormGroup;

  public hora: any;
  public servicoTipo: string;
  public valor: string;
  public agendamento: Agendamento;

  constructor(
    private menu: MenuController,
    private route: ActivatedRoute,
    private servicosService: ServicosService,
    private fb: FormBuilder
  ) {
    this.sideMenu();
    this.route.queryParams.subscribe((item) => {
      this.servicoId = item.id;
      this.estabelecimentoId = item.local;
    });
  }

  ngOnInit(): void {
    this.mountForm();

    this.form.get('horario')?.valueChanges.subscribe((data) => {
      this.hora = data;
    });
    this.form.get('servicoTipo')?.valueChanges.subscribe((data: Tipo) => {
      this.servicoTipo = data?.nome;
      this.valor = data?.valor;
    });

    this.servico = this.servicosService.getServicesByID(this.servicoId);
    this.estabelecimento = this.servicosService.getPlaceByID(
      this.estabelecimentoId,
      this.servico
    );
  }

  public mountForm(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      nascimento: [null, Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      veiculoTipo: ['', Validators.required],
      servicoTipo: ['', Validators.required],
      horario: ['', Validators.required],
      pagamento: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    console.log('Agendamento realizado: ', this.form.value);
    // setar os valores do form para a variável agendamento
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
