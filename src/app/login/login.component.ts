import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocalStorageService } from '../services/local-storage.service';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public form!: FormGroup;

	constructor(private route: ActivatedRoute, private router: Router, private servicosService: ServicosService, private fb: FormBuilder, private alertController: AlertController, private localStorageService: LocalStorageService) {}

	ngOnInit() {
		this.mountForm();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.required],
			type: [false, Validators.required],
		});
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		const email = this.form.get('email').value;
		const password = this.form.get('password').value;
		let type = '';
		if (this.form.get('type').value == true) {
			type = 'empresa';
		} else {
			type = 'usuario';
		}

		this.servicosService.verifyLogin(type, email, password).subscribe(
			(resp: any) => {
				if (resp.rows.length == 0) {
					this.presentAlert();
					this.mountForm();
				} else {
					this.localStorageService.createItem(resp.rows[0], type);
					this.router.navigate(['/home']);
				}
			},
			(err) => {
				this.presentAlert();
				this.mountForm();
			}
		);
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
