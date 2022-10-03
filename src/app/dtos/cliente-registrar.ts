
export class ClienteRegistrarDto {

    tipoDocumento: string;
	documento: string;
	nombres: string;
	apellidos: string;
	direccion: string;
	ciudad: string;
	correo: string;
	telefono: string;

    constructor(tipoDocumento: string, documento: string, nombres: string, apellidos: string, direccion: string,
        ciudad: string,  correo: string, telefono: string) {
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