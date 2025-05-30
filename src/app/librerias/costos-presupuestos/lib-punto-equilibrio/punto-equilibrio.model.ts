export interface PuntoEquilibrioRequest {
  costofijo: number;
  precioVenta: number;
  costovariable: number;
}

export interface PuntoEquilibrioResponse {
  resultado: number;
}
