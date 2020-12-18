/*
    OBJETIVOS DA AULA:
        - Continuar a evoluir o aprendizado sobre Orientação a Objetos no JavaScript (continuação do Curso de JavaScript: Programando a Orientação a Objetos)
        - OBS: Imagine o seguinte cenário:
            - Criaremos um sistema de contas correntes e cadastro de clientes para o cliente 'ByteBank'.
            - O sistema deve permitir a manipulação do saldo dos usuários e operações de transferências bancárias.
            - Além disto, incluiremos a funcionalidade de Conta Poupança e Conta Salário
            - Toda conta deve ter uma operação própria de saque, com sua taxa própria.
*/
import {Cliente} from "./Cliente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaSalario } from "./Conta/ContaSalario.js";




const cliente1 = new Cliente("Fulano", 11122233344);
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupancaCliente1 = new ContaPoupanca(50, 1001, cliente1);
contaCorrenteCliente1.depositar(100);
contaPoupancaCliente1.sacar(10);

const contaSalarioCliente1 = new ContaSalario(1001,cliente1);
contaSalarioCliente1.depositar(100);
contaSalarioCliente1.sacar(10);

console.log(contaPoupancaCliente1);
console.log(contaCorrenteCliente1);
console.log(contaSalarioCliente1);