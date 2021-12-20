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
			type: type,
			user: user,
		};
		// quando o usuário loga, cria o item no local storage
		localStorage.setItem('usuario', JSON.stringify(item));
	}

	getItem(key: string) {
		let item = localStorage.getItem(key);
		if (item) {
			console.log('Chamou aqui');
			return JSON.parse(item);
		}
	}

	// verifica se existe item de usuario no local storage
	getLogedUser() {
		if (this.getItem('usuario')) {
			return true;
		} else {
			return false;
		}
	}

	clearLocalStorage() {
		localStorage.clear();
	}
}
