import { Cliente } from "./Cliente.js";

//Classe Abstrata
export class Conta {
    constructor(saldoInicial, agencia, cliente) {
        if (this.constructor == Conta) { //Para informar ao desenvolvedor que ele não deve instanciar objetos deste tipo (classe abstrata).
            throw new Error("Não é permitido instanciar uma Conta diretamente");
        }

        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;        
    }



    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    //Método Abstrato
    sacar(valor) {
        throw new Error("O método 'sacar' da classe Conta é abstrato e não foi implementado.");
    }

    _sacar(valor, taxa) {        
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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