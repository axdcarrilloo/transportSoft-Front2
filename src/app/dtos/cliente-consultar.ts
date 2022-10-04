
export class ClienteConsultarDto {

    id: number;
    tipoDocumento: string;
	documento: string;
	nombres: string;
	apellidos: string;
	direccion: string;
	ciudad: string;
	correo: string;
	telefono: string;

    constructor(id: number, tipoDocumento: string, documento: string, nombres: string, apellidos: string, direccion: string,
        ciudad: string,  correo: string, telefono: string) {
            this.id = id;
            this.tipoDocumento = tipoDocumento;
            this.documento = documento;
            this.nombres = nombres;
            this.apellidos = apellidos;
            this.direccion = direccion;
            this.ciudad = ciudad;
            this.correo = correo;
            this.telefono = telefono;
    }

}