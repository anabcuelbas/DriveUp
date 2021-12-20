import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estabelecimento } from '../models/estabelecimento.model';
import { Usuario } from '../models/usuario.model';
import { LocalStorageService } from '../services/local-storage.service';
import { ServicosService } from '../services/servicos.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
	public form!: FormGroup;
	public user: Usuario = undefined;
	public empresa: Estabelecimento;
	public isEditing = false;
	public localStorageResponse;

	constructor(private fb: FormBuilder, private router: Router, private service: ServicosService, private localStorageService: LocalStorageService) {}

	ngOnInit() {
		this.getUserByID();
	}

	public mountUserForm(): void {
		this.form = this.fb.group({
			nome: [this.user.nomeUsuario, Validators.required],
			email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
			telefone: [this.user.telefone, Validators.required],
		});
	}

	public mountEmpresaForm(): void {
		this.form = this.fb.group({
			nome: [this.empresa.nome, Validators.required],
			email: [this.empresa.email, Validators.compose([Validators.required, Validators.email])],
			horaFuncionamento: [this.empresa.horafuncionamento, Validators.required],
			diasFuncionamento: [this.empresa.diasfuncionamento, Validators.required],
			endereco: [this.empresa.endereco, Validators.required],
			img: [this.empresa.img],
		});
	}

	public getUserByID(): void {
		this.localStorageResponse = this.localStorageService.getItem('usuario');
		if (this.localStorageResponse?.type == 'usuario') {
			this.user = this.localStorageResponse?.user;
			this.user.nomeUsuario = this.localStorageResponse?.user.nomeusuario;
			this.mountUserForm();
		} else {
			console.log(this.localStorageResponse?.user);
			this.empresa = this.localStorageResponse?.user;
			this.mountEmpresaForm();
		}
	}

	public cancel(): void {
		this.isEditing = !this.isEditing;
		this.user && this.mountUserForm();
		this.empresa && this.mountEmpresaForm();
	}

	public editProfile(): void {
		this.isEditing = !this.isEditing;
	}

	public onSubmit(): void {
		this.form.markAllAsTouched();

		if (this.form.invalid) {
			return;
		}

		if (this.user) {
			const formularioUser = this.form.value;
			this.service.updateUser(this.form.value).subscribe(
				(item) => {
					this.user.nomeUsuario = formularioUser.nome;
					this.user.email = formularioUser.email;
					this.user.telefone = formularioUser.telefone;
					this.localStorageService.createItem(this.user, 'usuario');
					this.localStorageResponse = this.localStorageService.getItem('usuario');

					this.mountUserForm();
				},
				(err) => {
					console.log('ERRO: ', err);
				}
			);
		}

		if (this.empresa) {
			const formulario = this.form.value;
			this.service.updateEstabelecimento(this.form.value).subscribe(
				(item) => {
					this.empresa.nome = formulario.nome;
					this.empresa.diasfuncionamento = formulario.diasFuncionamento;
					this.empresa.email = formulario.email;
					this.empresa.endereco = formulario.endereco;
					this.empresa.horafuncionamento = formulario.horaFuncionamento;
					this.empresa.img = formulario.img;

					this.localStorageService.createItem(this.empresa, 'empresa');
					this.localStorageResponse = this.localStorageService.getItem('usuario');

					this.mountEmpresaForm();
				},
				(err) => {
					console.log('ERRO: ', err);
				}
			);
		}

		this.editProfile();
		this.user && this.mountUserForm();
		this.empresa && this.mountEmpresaForm();
	}

	public logout() {
		this.localStorageService.clearLocalStorage();
		this.router.navigate(['/login']);
	}
}
