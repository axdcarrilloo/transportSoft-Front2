
export class CamionRegistrarDto {

    placa: string;
	desripcion: string;
	conductor: string;

    constructor(placa: string, desripcion: string, conductor: string) {
        this.placa = placa;
        this.desripcion = desripcion;
        this.conductor = conductor;
    }

}