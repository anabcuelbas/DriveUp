import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public form!: FormGroup;

	constructor(private route: ActivatedRoute, private router: Router, private servicosService: ServicosService, private fb: FormBuilder) {}

	ngOnInit() {
		this.mountForm();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			senha: ['', Validators.required],
		});
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		let login = { email: this.form.get('email').value, senha: this.form.get('senha').value };
		// checa login e retorna se usuário é empresa ou não
		// this.servicosService.checkLogin(login).subscribe((item) => {});

		let user = 'empresa'; // esse user vamos receber do checkLogin do backend
		if (user == 'empresa') {
			this.router.navigate(['/home']); //trocar para rota de home da empresa (não vamos fazer a página em si)
		} else {
			this.router.navigate(['/home']);
		}
	}
}
