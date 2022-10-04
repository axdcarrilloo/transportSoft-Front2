
export class CamionConsultarDto {

    id: number;
    placa: string;
	desripcion: string;
	conductor: string;

    constructor(id: number, placa: string, desripcion: string, conductor: string) {
        this.id = id;
        this.placa = placa;
        this.desripcion = desripcion;
        this.conductor = conductor;
    }

}