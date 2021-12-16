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
	public user: Usuario;
	public empresa: Estabelecimento;
	public isEditing = false;
	public localStorageResponse = this.localStorageService.getItem('usuario');

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
			horafuncionamento: [this.empresa.horafuncionamento, Validators.required],
			diasfuncionamento: [this.empresa.diasfuncionamento, Validators.required],
			endereco: [this.empresa.endereco, Validators.required],
			img: [this.empresa.img],
		});
	}

	public getUserByID(): void {
		if (this.localStorageResponse?.type == 'usuario') {
			this.user = this.localStorageResponse?.user;
			this.mountUserForm();
		} else {
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

		this.user &&
			this.service.updateUser(this.form.value).subscribe(
				(item) => {
					console.log('Update User: ', item);
				},
				(err) => {
					console.log('ERRO: ', err);
				}
			);
		this.empresa &&
			this.service.updateEstabelecimento(this.form.value).subscribe(
				(item) => {
					console.log('Update Empresa: ', item);
				},
				(err) => {
					console.log('ERRO: ', err);
				}
			);

		this.editProfile();
		this.user && this.mountUserForm();
		this.empresa && this.mountEmpresaForm();
	}

	public logout() {
		this.router.navigate(['/login']);
	}
}
