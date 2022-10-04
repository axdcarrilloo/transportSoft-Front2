// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CLIENTE_REGISTRAR: "http://localhost:9091/TransportSoft/Cliente/Registrar",
  CLIENTE_CONSULTAR_TODOS: "http://localhost:9091/TransportSoft/Cliente/Todos",
  CLIENTE_ELIMINAR: "http://localhost:9091/TransportSoft/Cliente/Eliminar/",
  CAMION_REGISTRAR: "http://localhost:9091/TransportSoft/Camion/Registrar",
  CAMION_ELIMINAR: "http://localhost:9091/TransportSoft/Camion/Eliminar/",
  CAMION_CONSULTAR_TODOS: "http://localhost:9091/TransportSoft/Camion/Todos",
  FLOTA_REGISTRAR: "http://localhost:9091/TransportSoft/Flota/Registrar",
  FLOTA_ELIMINAR: "http://localhost:9091/TransportSoft/Flota/Eliminar/",
  FLOTA_CONSULTAR_TODAS: "http://localhost:9091/TransportSoft/Flota/Todas",
  BODEGA_REGISTRAR: "http://localhost:9091/TransportSoft/Bodega/Registrar",
  BODEGA_ELIMINAR: "http://localhost:9091/TransportSoft/Bodega/Eliminar/",
  BODEGA_CONSULTAR_TODAS: "http://localhost:9091/TransportSoft/Bodega/Todas",
  PUERTO_REGISTRAR: "http://localhost:9091/TransportSoft/Puerto/Registrar",
  PUERTO_ELIMINAR: "http://localhost:9091/TransportSoft/Puerto/Eliminar/",
  PUERTO_CONSULTAR_TODOS: "http://localhost:9091/TransportSoft/Puerto/Todos"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
