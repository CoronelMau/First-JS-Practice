import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
  constructor(cliente, numero, agencia) {
    super(cliente, numero, agencia, 0);
  }

  retirarCuenta(valor) {
    super._retirarCuenta(valor, 1);
  }
}