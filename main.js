import { Usuario } from "./usuario.js"
import { Livro } from "./livro.js"

class Main {
    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addLivroUsuario(idUsuario, codigoLivro, titulo, autor) {
        const usuario = this.usuarios.find(usuario => usuario.id === idUsuario);
        if (usuario) {
            const livro = new Livro(codigoLivro, titulo, autor);
            usuario.inserirLivroEmprestado(livro);
        } else {
            console.log(`Usuário não encontrado.`);
        }
    }

    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codigoLivro) {
        const usuarioOrigem = this.usuarios.find(usuario => usuario.id === idUsuarioOrigem);
        const usuarioDestino = this.usuarios.find(usuario => usuario.id === idUsuarioDestino);

        if (usuarioOrigem && usuarioDestino) {
            const livro = usuarioOrigem.getLivroEmprestado(codigoLivro);
            if (livro) {
                usuarioOrigem.removerLivroEmprestadoByCodigo(codigoLivro);
                usuarioDestino.inserirLivroEmprestado(livro);
            } else {
                console.log(`Livro com código ${codigoLivro} não encontrado para o usuário ${idUsuarioOrigem}.`);
            }
        } 
    }

    mostrarTodosOsUsuarios() {
        this.usuarios.forEach(usuario => console.log(usuario.imprimirCompleto()));
    }
}

const main = new Main();
main.addUsuario(new Usuario(1, "Carlos"));
main.addLivroUsuario(1, 1, "Dom Quixote", "Miguel de Cervantes");
main.addLivroUsuario(1, 2, "Orgulho e Preconceito", "Jane Austen");
main.mostrarTodosOsUsuarios();
main.addUsuario(new Usuario(2, "Ana"));
main.transferirLivro(1, 2, 1);
main.mostrarTodosOsUsuarios();

