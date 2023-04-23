import { Cuenta } from "./Cuenta.js";

export class cuentaCorriente extends Cuenta {
  static cantidadCuentas = 0;

  constructor(cliente, agencia, numero) {
    super(cliente, agencia, numero, 0);
    cuentaCorriente.cantidadCuentas++;
  }

  retirarCuenta(valor) {
    super._retirarCuenta(valor, 5);
  }
}
