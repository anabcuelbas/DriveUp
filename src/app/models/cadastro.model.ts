import { Estabelecimento } from './estabelecimento.model';
import { Usuario } from './usuario.model';

export interface Cadastro {
	usuario: Usuario;
	empresa: Estabelecimento;
	senha: string;
	confirmarSenha: string;
}
