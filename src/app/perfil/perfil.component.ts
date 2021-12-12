import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { Usuario } from '../models/usuario.model';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
	public form!: FormGroup;
	public user: Usuario;
	public isEditing = false;

	constructor(private fb: FormBuilder, private router: Router, private service: ServicosService) {}

	ngOnInit() {
		this.getUserByID();
	}

	public mountForm(): void {
		this.form = this.fb.group({
			nome: [this.user.nomeUsuario, Validators.required],
			email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
			telefone: [this.user.telefone, Validators.required],
		});
	}

	public getUserByID(): void {
		let resp: Login = this.service.verifyLogin('laura@usp.br', '123');
		if (resp) {
			this.user = resp.usuario;
			console.log('RESP: ', resp);
		}
		this.mountForm();
	}

	public cancel(): void {
		this.isEditing = !this.isEditing;
		this.mountForm();
	}

	public editProfile(): void {
		this.isEditing = !this.isEditing;
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		let newUser: Usuario = {
			nomeUsuario: this.form.get('nome').value,
			email: this.user.email,
			telefone: this.form.get('telefone').value,
		};

		this.user = this.service.updateUser(newUser);
		this.editProfile();
		this.mountForm();
		console.log(this.user);
	}
}
