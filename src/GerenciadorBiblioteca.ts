import { Biblioteca } from "./Biblioteca";
export class GerenciarBiblioteca {
    livros: Biblioteca[];
    constructor() {
        this.livros = [];
    }
    localizar(codigo: string): number {
        let i: number = 0;
        let posicao: number = -1;
        while (i < this.livros.length && posicao == -1) {
            if (codigo == this.livros[i].getCodigo()) {
                posicao = i;
            }
            i++;
        }
        return posicao;
    }
    cadastrarLivro(novoLivro: Biblioteca): boolean {
        let retorno: boolean = false;
        if (this.localizar(novoLivro.getCodigo()) == -1) {
            this.livros.push(novoLivro);
            retorno = true;
        }
        return retorno;
    }
    adicionarExemplares(codigo: string, quantidade: number): boolean {
        let posicaoAdicionar = this.localizar(codigo);
        let retorno: boolean = false;
        if (posicaoAdicionar !== -1 && quantidade > 0) {
            this.livros[posicaoAdicionar].adicionar(quantidade);
            retorno = true;
        }
        return retorno;
    }
    emprestarLivro(codigo: string, quantidade: number): boolean {
        let posicaoEmprestar = this.localizar(codigo);
        let retorno: boolean = false;
        if (this.livros[posicaoEmprestar].getQuantidade() >= quantidade && quantidade > 0) {
            this.livros[posicaoEmprestar].emprestar(quantidade);
            retorno = true;
        } 
        return retorno;
    }
    devolver(codigo: string, quantidade: number): boolean {
        let posicaoDevolver = this.localizar(codigo);
        let retorno: boolean = false;
        if (quantidade > 0) {
            this.livros[posicaoDevolver].adicionar(quantidade);
            retorno = true;
        } 
        return retorno;
    }
    verificarDisponibilidade(codigo: string, quantidade: number): boolean {
        let retorno: boolean = false;
        let posicaoVerificar = this.localizar(codigo);
        if (this.livros[posicaoVerificar].getQuantidade() >= quantidade && quantidade > 0) {
            retorno = true;
        }
        return retorno;
    }
    alterarTitulo(codigo: string, titulo: string): boolean {
        let posicaoAlterarTitulo = this.localizar(codigo)
        let retorno: boolean = false
        if (this.livros[posicaoAlterarTitulo].getTitulo() == titulo && titulo !== "") {
            this.livros[posicaoAlterarTitulo].setTitulo(titulo)
            retorno = true;
        } 
        return retorno
    }
    apresentar(){
        let i = 0
        while(i < this.livros.length){
            console.log(this.livros[i].apresentarDados())
            i++
        }
    }
}
