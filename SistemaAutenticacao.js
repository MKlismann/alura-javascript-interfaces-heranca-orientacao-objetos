/*
    1) Ser autenticável siginifica ter o método autenticar.
    2) Ducky Typing: muito utilizado em linguagens fracamente tipadas; o tipo não interessa; o que interessa é o comportamento.
 */
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static login(autenticavel) {
        return "autenticar" in autenticavel
            && autenticavel.autenticar instanceof Function;
    }
}