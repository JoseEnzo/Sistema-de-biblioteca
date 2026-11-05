import { Biblioteca } from "./Biblioteca";
import { GerenciarBiblioteca } from "./GerenciadorBiblioteca";

const vetorBiblioteca = new GerenciarBiblioteca();
let opcao: number;
console.log(
    `1 Criar um livro informando código e título.
2 Mostrar os dados iniciais do livro.
3 Adicionar 10 exemplares e mostrar a nova quantidade.
4 Emprestar 3 exemplares e mostrar a quantidade restante.
5 Tentar emprestar 20 exemplares e informar o resultado.
6 Devolver 2 exemplares e mostrar a quantidade atual.
7 Verificar se existem 5 exemplares disponíveis.
8 Alterar o título do livro.
9 Mostrar todos os dados finais.
0 Para sair`,
);
do {
    opcao = parseInt(prompt(`Digite a opção de acordo com o console: `)!);
    switch (opcao) {
        case 1:
            let codigoLivro = prompt("Digite o codigo do livro: ")!;
            let posicao = vetorBiblioteca.localizar(codigoLivro);
            if (posicao == -1) {
                let tituloLivro = prompt("Digite o titulo do livro: ")!;
                const novoLivro = new Biblioteca(codigoLivro, tituloLivro);
                vetorBiblioteca.cadastrarLivro(novoLivro);
                console.log("Livro adicionado com sucesso");
            } else {
                console.log("Ja existe um ou mais livros com esses atributos cadastrado! ");
            }
            break;
        case 2:
            let codigoApresentar = prompt('Digite o codigo do livro a ser apresentado: ')!
            let posicaoApresentar = vetorBiblioteca.localizar(codigoApresentar)
            if (posicaoApresentar !== -1) {
                vetorBiblioteca.livros[posicaoApresentar].apresentarDados();
            } else {
                console.log('Erro ao apresentar dados!')
            }
            break;
        case 3:
            let codigoAdicionar = prompt("Digite o codigo do livro que deseja adicionar: ")!;
            let posicaoAdicionar = vetorBiblioteca.localizar(codigoAdicionar);
            if (posicaoAdicionar !== -1) {
                let quantidadeAdicionar = parseInt(prompt("Digite a quantidade de exemplares a ser adicionado(s): (10)")!);
                vetorBiblioteca.adicionarExemplares(codigoAdicionar, quantidadeAdicionar,);
                console.log("Exemplares adicionados com sucesso! ");
                console.log(`A quantidade de livros é: ${vetorBiblioteca.livros[posicaoAdicionar].getQuantidade()}`)
            } else {
                console.log(`Erro ao adicionar exemplar(es)`)
                console.log(`A quantidade de livros é: ${vetorBiblioteca.livros[posicaoAdicionar].getQuantidade()}`)
            }
            break;
        case 4:
            let codigoEmprestar = prompt("Digite o codigo do livro que você deseja emprestar: ")!;
            let posicaoEmprestar = vetorBiblioteca.localizar(codigoEmprestar);
            if (posicaoEmprestar !== -1) {
                let quantidadeEmprestar = parseInt(prompt("Digite a quantidade de exemplaress a ser emprestado(s): ")!);
                vetorBiblioteca.emprestarLivro(codigoEmprestar, quantidadeEmprestar)
                console.log('Livro(s) emprestado com sucesso! ')
            } else {
                console.log('Erro ao emprestar livro(s)!')
            }
            break;
        case 5:
            let codigoEmprestar20 = prompt("Digite o codigo do livro que você deseja emprestar: (20)")!;
            let posicaoEmprestar20 = vetorBiblioteca.localizar(codigoEmprestar20);
            if (posicaoEmprestar20 !== -1) {
                let quantidadeEmprestar20 = parseInt(prompt("Digite a quantidade de exemplaress a ser emprestado(s): (20)")!);
                vetorBiblioteca.emprestarLivro(codigoEmprestar20, quantidadeEmprestar20)
                console.log('Livro(s) emprestado com sucesso! ')
            } else {
                console.log('Erro ao emprestar livro(s)!')
            }
            break;
        case 6:
            let codigoDevolver = prompt("Digite o codigo do livro que você deseja devolver: ")!;
            let posicaoDevolver = vetorBiblioteca.localizar(codigoDevolver);
            if (posicaoDevolver !== -1) {
                let quantidadeDevolver = parseInt(prompt("Digite a quantidade de exemplares a ser devolvido(s): ")!);
                vetorBiblioteca.devolver(codigoDevolver, quantidadeDevolver)
                console.log('Livro(s) devolvido com sucesso! ')
                console.log(`A quantidade de livros restantes é: ${vetorBiblioteca.livros[posicaoDevolver].getQuantidade()}`)
            } else {
                console.log('Erro ao devolver livro(s)!')
                console.log(`A quantidade de livros restantes é: ${vetorBiblioteca.livros[posicaoDevolver].getQuantidade()}`)
            }
            break;
        case 7:
            let verificarDisponivel = prompt("Digite o codigo do livo que você deseja verificar: ")!
            let posicaoDisponivel = vetorBiblioteca.localizar(verificarDisponivel);
            if (posicaoDisponivel !== -1) {
                let quantidadeDisponivel = parseInt(prompt('Digite a quantidade para verificar disponibilidade: ')!)
                if (quantidadeDisponivel > 0 && vetorBiblioteca.livros[posicaoDisponivel].getQuantidade() > 5) {
                    console.log(`Existem mais de 5 exemplares, o total é: ${vetorBiblioteca.livros[posicaoDisponivel].getQuantidade()}`)
                } else {
                    console.log(`Existem menos de 5 exemplares, o total é: ${vetorBiblioteca.livros[posicaoDisponivel].getQuantidade()}`)
                }
            }
            break;
        case 8:
            let codigoAlterarTitulo = prompt("Digite o codigo do livro que vocẽ deseja alterar o titulo: ")!
            let posicaoAlterarTitulo = vetorBiblioteca.localizar(codigoAlterarTitulo)
            if (posicaoAlterarTitulo !== -1) {
                let tituloAlterado = prompt('Digite o novo titulo: ')!
                vetorBiblioteca.livros[posicaoAlterarTitulo].setTitulo(tituloAlterado)
                console.log('Titulo alterado com sucesso! ')
            } else {
                console.log(`Erro ao alterar título! `)
            }
            break;
        case 9:
            vetorBiblioteca.apresentar()
            break;
    }
} while (opcao !== 0);
