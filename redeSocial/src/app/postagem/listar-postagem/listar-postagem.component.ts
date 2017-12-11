import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { Postagem } from '../../shared/model/postagem';
import { PostagemService } from '../../shared/service/postagem.service';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent implements OnInit {
  usuario: Usuario = new Usuario();
  postagem: Postagem = new Postagem();
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService) { 
    this.obterPostagens();

    this.usuario.nome = "Gustavo Vilar de Farias";
    this.usuario.email = "gvilardefarias@ymail.com";
    this.usuario.dataNascimento = "07/12/2000";
    this.usuario.senha = "123";
    this.usuario.profissao = "Programador";
  }

  ngOnInit() {
  }

  obterPostagens(){
    this.postagens = this.postagemService.obterPostagens();
  }

  removerPostagem(texto, usuario){
    this.postagemService.removerPostagem(texto, usuario);

    this.obterPostagens();
  }

  adicionarPostagem(){
    this.postagem.usuario = this.usuario;

    this.postagemService.adicionarPostagem(this.postagem);

    this.postagem = new Postagem();
    
    this.obterPostagens();
  }
}
