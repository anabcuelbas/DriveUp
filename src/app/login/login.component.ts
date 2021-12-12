import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login.model';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public form!: FormGroup;

	constructor(private route: ActivatedRoute, private router: Router, private servicosService: ServicosService, private fb: FormBuilder, private alertController: AlertController) {}

	ngOnInit() {
		this.mountForm();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.required],
		});
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		// checa login e se usuário é empresa ou não
		// this.servicosService.checkLogin(login).subscribe((item) => {});
		let resp: Login = this.servicosService.verifyLogin(this.form.get('email').value, this.form.get('password').value);

		if (resp) {
			if (resp.tipo == 'empresa') {
				this.router.navigate(['/home']); //trocar para rota de home da empresa (não vamos fazer a página em si)
			} else {
				this.router.navigate(['/home']);
			}
		} else {
			this.presentAlert();
		}
	}

	public async presentAlert() {
		const alert = await this.alertController.create({
			cssClass: 'alert',
			header: 'Login Inválido',
			message: 'Seu email ou senha estão incorretos. Por favor tente novamente.',
			buttons: ['OK'],
		});

		await alert.present();

		const { role } = await alert.onDidDismiss();
		console.log('onDidDismiss resolved with role', role);
	}
}
