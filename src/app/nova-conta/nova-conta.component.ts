import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cadastro } from '../models/cadastro.model';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-nova-conta',
	templateUrl: './nova-conta.component.html',
	styleUrls: ['./nova-conta.component.scss'],
})
export class NovaContaComponent implements OnInit {
	public form!: FormGroup;
	public invalidPassword = false;
	public cadastro: Cadastro;
	public tipo = '';

	constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router, private service: ServicosService) {}

	ngOnInit() {
		this.mountForm();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			usuario: this.fb.group({
				nomeUsuario: ['', Validators.required],
				email: ['', Validators.compose([Validators.required, Validators.email])],
				telefone: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
			}),
			empresa: this.fb.group({
				nomeEmpresa: ['', Validators.required],
				horafuncionamento: ['', Validators.required],
				diasfuncionamento: ['', Validators.required],
				endereco: ['', Validators.required],
				img: [''],
				emailEmpresa: ['', Validators.compose([Validators.required, Validators.email])],
			}),
			tipo: ['', Validators.required],
			senha: ['', Validators.required],
			confirmarSenha: ['', Validators.required],
		});
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if ((this.tipo == 'usuario' && this.form.get('usuario').invalid) || (this.tipo == 'empresa' && this.form.get('empresa').invalid)) {
			return;
		}

		if (this.form.get('senha').value != this.form.get('confirmarSenha').value) {
			this.invalidPassword = true;
			this.mountForm();
		} else {
			console.log('ENTROU NO CADASTRAR');
			this.cadastro = this.form.value;
			this.service.cadastrarNovoUsuario(this.cadastro).subscribe((item) => {
				console.log('Item: ', item);
				this.presentAlert();
			});
		}
	}

	public async presentAlert() {
		const alert = await this.alertController.create({
			cssClass: 'alert',
			header: 'Sucesso!',
			message: 'Sua conta foi criada com sucesso :D',
			buttons: ['OK'],
		});

		await alert.present();

		const { role } = await alert.onDidDismiss();
		this.router.navigate(['/login']);
		console.log('onDidDismiss resolved with role', role);
	}

	public getType(): void {
		this.tipo = this.form.get('tipo').value;
	}
}
