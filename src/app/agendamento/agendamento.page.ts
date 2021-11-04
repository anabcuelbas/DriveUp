import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Agendamento } from '../models/agendamento.model';
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
	public estabelecimentoId: any;
	public endereco: any;
	public nome: any;
	public servicoNome: any;

	public subTipos: Tipo[] = [];
	public horarios: any[] = [];
	public precos: any[] = [];
	public form!: FormGroup;

	public hora: any;
	public servicoTipo: string;
	public servicoTipoId: string;
	public veiculoTipo: string;
	public valor: string;
	public agendamento: Agendamento = {
		nomeDono: '',
		telefone: '',
		email: '',
		data: '',
		horario: '',
		tipoVeiculo: '',
		servico: {
			id: '',
			nome: '',
			servicoId: '',
			estabelecimentoId: '',
		},
	};

	constructor(private menu: MenuController, private route: ActivatedRoute, private servicosService: ServicosService, private fb: FormBuilder, public toastController: ToastController, private router: Router) {
		this.sideMenu();
		this.route.queryParams.subscribe((item) => {
			this.servicoId = item.id;
			this.estabelecimentoId = item.estabelecimentoId;
			this.nome = item.nome;
			this.endereco = item.endereco;
			this.servicoNome = item.servicoNome;
		});
	}

	async presentToast() {
		const toast = await this.toastController.create({
			message: 'Agendamento realizado com sucesso!',
			duration: 2000,
		});
		toast.present();
	}

	public getpreco(): any {
		this.servicosService.getPrecoByVeiculoAndSubServicoID(this.servicoTipoId, this.veiculoTipo).subscribe((item) => {
			if (item.rowCount > 0) {
				item.rows.forEach((element) => {
					this.valor = `R$ ${element.valor}`;
					return;
				});
			} else {
				this.valor = '';
			}
		});
	}

	ngOnInit(): void {
		this.mountForm();

		this.form.get('horario')?.valueChanges.subscribe((data) => {
			this.hora = data.horario;
		});
		this.form.get('servicoTipo')?.valueChanges.subscribe((data: Tipo) => {
			this.servicoTipo = data?.nome;
			this.servicoTipoId = data?.id;
			this.getUpdatedVeiculo();
		});

		this.servicosService.getSubtipoByServicoAndEstabelecimentoID(this.servicoId, this.estabelecimentoId).subscribe((item) => {
			item.rows.forEach((element) => {
				this.subTipos.push(element);
			});
		});

		this.servicosService.getHorarioByEstabelecimentoID(this.estabelecimentoId, this.servicoId).subscribe((item) => {
			item.rows.forEach((element) => {
				this.horarios.push(element);
			});
		});
	}

	public getUpdatedVeiculo() {
		this.form.get('veiculoTipo')?.valueChanges.subscribe((data) => {
			this.veiculoTipo = data;
			this.getpreco();
		});
	}

	public mountForm(): void {
		this.form = this.fb.group({
			nome: ['', Validators.required],
			telefone: [null, Validators.required],
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

		this.agendamento.nomeDono = this.form.get('nome').value;
		this.agendamento.telefone = this.form.get('telefone').value;
		this.agendamento.email = this.form.get('email').value;
		this.agendamento.horario = this.form.get('horario').value;
		this.agendamento.data = '10/11/2021';
		this.agendamento.servico = this.form.get('servicoTipo').value;
		this.agendamento.tipoVeiculo = this.form.get('veiculoTipo').value;

		this.presentToast();
		// this.servicosService.addReservas(this.agendamento).subscribe((item) => {
		// 	console.log(item);
		// });
		this.router.navigate(['/home']);
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
