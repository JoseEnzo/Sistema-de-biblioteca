export class Biblioteca {
    private codigo: string;
    private titulo: string;
    private quantidade: number;
    constructor(codigo: string, titulo: string) {
        ((this.codigo = codigo), (this.titulo = titulo), (this.quantidade = 0));
    }
    getCodigo(): string {
        return this.codigo;
    }
    getTitulo(): string {
        return this.titulo;
    }
    getQuantidade(): number {
        return this.quantidade;
    }
    setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }
    adicionar(novaQuantidade: number): void {
        this.quantidade = this.quantidade + novaQuantidade;
    }
    emprestar(novaQuantidade: number): void {
        this.quantidade = this.quantidade - novaQuantidade;
    }
    apresentarDados(){
        console.log(`${this.codigo} ${this.titulo} ${this.quantidade}`)
    }
}
