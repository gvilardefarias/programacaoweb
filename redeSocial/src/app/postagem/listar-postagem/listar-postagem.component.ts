import { Component, OnInit, Input, HostBinding} from '@angular/core';
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
  color = {R:"255", G:"255", B:"255"};

  constructor(private postagemService: PostagemService) { 
    this.obterPostagens();

    this.usuario.nome = "Gustavo Vilar de Farias";
    this.usuario.email = "gvilardefarias@ymail.com";
    this.usuario.senha = "123";
    this.usuario.amigosID = [2];
    this.usuario.id = 1;
  }

  ngOnInit() {
  }

  obterPostagens(){
    this.postagemService.obterPostagens().subscribe(
      postagens => {
        this.postagens = [];

        for(var i=0;i<postagens.length;i++)
          if(postagens[i].usuario.id==this.usuario.id){
            this.postagens.push(postagens[i]);
          } else{
            for(var j=0;j<this.usuario.amigosID.length;j++)
              if(postagens[i].usuario.id==this.usuario.amigosID[j])
                this.postagens.push(postagens[i]);
          }
      }, erro => {
        return false;
      }
    );
  }

  adicionarPostagem(){
    this.postagem.usuario = this.usuario;

    this.postagemService.adicionarPostagem(this.postagem).subscribe(
      sucesso => {
        console.log('Postagem ' + this.postagem.id + ' cadastrado com sucesso!');
        
        this.postagem = new Postagem();
        this.obterPostagens();
      },
      erro => {
        console.log(erro);
      }
    );    
  }

  curtirPostagem(postagem:Postagem){
    if(postagem.curtidas==null)
      postagem.curtidas = [];

    var jaCurtiu = false;

    for(var i=0;i<postagem.curtidas.length;i++)
      if(postagem.curtidas[i].id==this.usuario.id)
         jaCurtiu = true;

    if(!jaCurtiu){
      postagem.curtidas.push(this.usuario);

      this.postagemService.atualizarPostagem(postagem).subscribe(
        sucesso => {
          console.log('Postagem ' + postagem.id + ' curtida com sucesso!');

          this.obterPostagens();
        },
        erro => {
          console.log(erro);
        }
      );
    }
  }

  mudarCor(){
    return "rgb("+this.color.R+", " + this.color.G + ", " + this.color.B + ")" ;
    
  } 
}


