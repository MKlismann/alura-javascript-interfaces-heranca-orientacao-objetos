/*
    OBJETIVOS DA AULA:
        - Continuar a evoluir o aprendizado sobre Orientação a Objetos no JavaScript (continuação do Curso de JavaScript: Programando a Orientação a Objetos)
        - OBS: Imagine o seguinte cenário:
            - Criaremos um sistema de contas correntes e cadastro de clientes para o cliente 'ByteBank'.
            - O sistema deve permitir a manipulação do saldo dos usuários e operações de transferências bancárias.
            - Além disto, incluiremos a funcionalidade de Conta Poupança
*/

import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Fulano", 11122233344);

const contaCorrenteCliente1 = new Conta(0, 1001, cliente1);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupancaCliente1 = new Conta(0, 1001, cliente1);

console.log(contaPoupancaCliente1);
console.log(contaCorrenteCliente1);