export class Cliente {
  nombreCliente;
  dniCliente;
  #clave;

  constructor(nombreCliente, dniCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.#clave = "";
  }

  asignarClave(clave) {
    this.#clave = clave;
  }


  autenticable(clave) {
    return true;
  }
}