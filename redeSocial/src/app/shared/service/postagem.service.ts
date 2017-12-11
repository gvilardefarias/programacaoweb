import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Postagem } from '../model/postagem';

@Injectable()
export class PostagemService {
  postagens: Postagem[] = [];
  usuario1: Usuario = new Usuario();
  postagem1: Postagem = new Postagem();
  postagem2: Postagem = new Postagem();

  constructor() {
      this.usuario1.nome = "Gustavo Vilar de Farias";
      this.usuario1.email = "gvilardefarias@ymail.com";
      this.usuario1.dataNascimento = "07/12/2000";
      this.usuario1.senha = "123";
      this.usuario1.profissao = "Programador";

      this.postagem1.texto = "Bom Dia";
      this.postagem1.usuario = this.usuario1;
      this.postagens.push(this.postagem1);

      this.postagem2.texto = "`Podem ter a certeza de que não foi quando descobriu a América, mas sim quando estava a descobri-la, que Colombo se sentiu feliz.´ -Fiódor Dostoiévski";
      this.postagem2.usuario = this.usuario1;
      this.postagens.push(this.postagem2);   
  }

  adicionarPostagem(postagem: Postagem) {
    this.postagens.push(postagem);
  }

  atualizarPostagem(postagem: Postagem) {
    for (var i = this.postagens.length - 1; i >= 0; i--)
      if(this.postagens[i].texto==postagem.texto){
          this.postagens[i] = postagem;
          break;
      }
  }

  obterPostagens(){
      return this.postagens;
  }

  removerPostagem(texto, usuario){
    for (var i = this.postagens.length - 1; i >= 0; i--)
      if(this.postagens[i].texto==texto && this.postagens[i].usuario==usuario){
          this.postagens.splice(i, 1);
          break;
      }
  }
}
