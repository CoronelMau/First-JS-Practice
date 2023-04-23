export class Cuenta {

  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {

    if (this.constructor == Cuenta) {
      throw new Error("No se debe instanciar objetos de la clase Cuenta");
    }

    this.#cliente = cliente;
    this.#saldo = saldo;
    this.numero = numero;
    this.agencia = agencia;
  }

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  depositoCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return this.#saldo;
    }
  }

  retirarCuenta(valor) {
    throw new Error("Debe implementar el método retirarCuenta en clase");
  }

  _retirarCuenta(valor, comision) {

    valor = valor * (1 + comision / 100);

    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return this.#saldo;
    }
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirCuenta(valor, cuentaDestino) {
    this.retirarCuenta(valor);
    cuentaDestino.depositoCuenta(valor);
  }
}
