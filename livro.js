export class Livro {
    constructor(codigo, titulo, autor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    imprimir() {
        return `Código: ${this.codigo}, Título: ${this.titulo}, Autor: ${this.autor}`;
    }
}


