import { Tipo } from './tipo-servico.model';

export interface Agendamento {
	nomeDono: string;
	telefone: any;
	email: string;
	tipoVeiculo: string;
	servico: Tipo;
	data: any;
	horario: any;
	// pagamento: string;
	// valor: string;
}
