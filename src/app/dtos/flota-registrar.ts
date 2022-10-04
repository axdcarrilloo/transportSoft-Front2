
export class FlotaRegistrarDto {

    numero: string;
	desripcion: string;
	capitan: string;

    constructor(numero: string, desripcion: string, capitan: string) {
        this.numero = numero;
        this.desripcion = desripcion;
        this.capitan = capitan;
    }

}