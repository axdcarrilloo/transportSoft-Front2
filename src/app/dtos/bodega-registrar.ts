
export class BodegaRegistrarDto {

    nombre: string;
	direccion: string;
	ciudad: string;

    constructor(nombre: string, direccion: string, ciudad: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
    }

}