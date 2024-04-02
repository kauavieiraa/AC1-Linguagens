export class Usuario {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.livrosEmprestados = [];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    inserirLivroEmprestado(livro) {
        this.livrosEmprestados.push(livro);
    }

    removerLivroEmprestadoByCodigo(codigo) {
        this.livrosEmprestados = this.livrosEmprestados.filter(livro => livro.codigo !== codigo);
    }

    getLivroEmprestado(codigo) {
        return this.livrosEmprestados.find(livro => livro.codigo === codigo);
    }

    imprimir() {
        return `ID: ${this.id}, Nome: ${this.nome}`;
    }

    imprimirCompleto() {
        let usuarioInfo = this.imprimir();
        let livrosInfo = this.livrosEmprestados.map(livro => `\nLivro: ${livro.nome}, Código: ${livro.codigo}`);
        return usuarioInfo + (livrosInfo.length > 0 ? '\nLivros emprestados:' + livrosInfo : '');
    }
}


