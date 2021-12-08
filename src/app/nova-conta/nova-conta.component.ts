import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-nova-conta',
	templateUrl: './nova-conta.component.html',
	styleUrls: ['./nova-conta.component.scss'],
})
export class NovaContaComponent implements OnInit {
	public form!: FormGroup;
	public invalidPassword = false;

	constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router) {}

	ngOnInit() {
		this.mountForm();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
		});
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		if (this.form.get('password').value != this.form.get('confirmPassword').value) {
			this.invalidPassword = true;
		} else {
			// chamar service para passar os dados para o back
			this.presentAlert();
		}
	}

	public async presentAlert() {
		const alert = await this.alertController.create({
			cssClass: 'alert',
			header: 'Sucesso!',
			message: 'Sua conta foi criada com sucesso :)',
			buttons: ['OK'],
		});

		await alert.present();

		const { role } = await alert.onDidDismiss();
		this.router.navigate(['/login']);
		console.log('onDidDismiss resolved with role', role);
	}
}
