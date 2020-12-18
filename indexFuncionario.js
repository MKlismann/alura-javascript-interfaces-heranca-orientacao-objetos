/*
    OBJETIVOS DA AULA:
        - Continuar a evoluir o aprendizado sobre Orientação a Objetos no JavaScript (continuação do Curso de JavaScript: Programando a Orientação a Objetos)
        - OBS: Imagine o seguinte cenário:
            - O sistema também deverá permitir o cadastro de funcionários com bonificações diferentes.
            - O sistema também precisará de uma autenticação para os funcionários e clientes.
*/
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor = new Diretor("Fulano", 10000, 11122233344);
const gerente = new Gerente("Cicrano", 5000, 22233344455);
const cliente = new Cliente("Fulano", 11122233344, "9876");
diretor.cadastrarSenha("1234");
gerente.cadastrarSenha("4321");

console.log(diretor);
console.log(gerente);
console.log(cliente);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "9876");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
