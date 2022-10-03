
export class ResponseMainDto {
    mensaje: string;
    response: any;

    constructor(mensaje: string, response: any) {
        this.mensaje = mensaje;
        this.response = response;
    }
}