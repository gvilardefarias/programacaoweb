import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];
  usuario1: Usuario = new Usuario();
  usuario2: Usuario = new Usuario();
  usuario3: Usuario = new Usuario();

  constructor() {
      this.usuario1.nome = "Gustavo Vilar de Farias";
      this.usuario1.email = "gvilardefarias@ymail.com";
      this.usuario1.dataNascimento = "07/12/2000";
      this.usuario1.senha = "123";
      this.usuario1.profissao = "Programador";
      this.usuarios.push(this.usuario1);

      this.usuario2.nome = "José Marcos Paulino Araujo Junior";
      this.usuario2.dataNascimento = "06/01/2001";
      this.usuario2.profissao = "Empresario";
      this.usuario2.dadosPublicos = true;
      this.usuarios.push(this.usuario2);

      this.usuario3.nome = "Lucas Alves Martins";
      this.usuario3.dataNascimento = "15/09/2000";
      this.usuario3.senha = "1321";
      this.usuario3.profissao = "Programador";
      this.usuario3.dadosPublicos = true;
      this.usuarios.push(this.usuario3);      
  }

  cadastrarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    
    console.log("\nUsuario Cadastrado:")
    console.log(usuario);
  }

  atualizarUsuario(usuario: Usuario) {
    for (var i = this.usuarios.length - 1; i >= 0; i--)
      if(this.usuarios[i].nome==usuario.nome){
          this.usuarios[i] = usuario;
          break;
      }
  }

  obterUsuarios(){
      return this.usuarios;
  }

  removerUsuario(nome){
    for (var i = this.usuarios.length - 1; i >= 0; i--)
      if(this.usuarios[i].nome==nome){
          this.usuarios.splice(i, 1);
          break;
      }
  }

}
