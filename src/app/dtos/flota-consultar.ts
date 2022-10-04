
export class FlotaConsultarDto {

    id: number;
    numero: string;
	desripcion: string;
	capitan: string;

    constructor(id: number, numero: string, desripcion: string, capitan: string) {
        this.id = id;
        this.numero = numero;
        this.desripcion = desripcion;
        this.capitan = capitan;
    }

}