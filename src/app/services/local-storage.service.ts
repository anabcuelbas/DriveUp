import { Injectable } from '@angular/core';
import { Estabelecimento } from '../models/estabelecimento.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	constructor() {}

	createItem(user: Usuario | Estabelecimento, type: string) {
		let item = {
			type,
			user,
		};
		localStorage.setItem('usuario', JSON.stringify(item));
	}

	getItem(key: string) {
		let item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
	}
}
