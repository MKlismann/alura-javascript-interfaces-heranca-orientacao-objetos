export class Conta{
    constructor(saldoInicial, agencia, cliente) {
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) { return; }
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}