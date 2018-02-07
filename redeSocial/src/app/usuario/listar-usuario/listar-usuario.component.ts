import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obterUsuarios();
  }

  obterUsuarios(){
     this.usuarioService.obterUsuarios().subscribe(
      user => {
        this.usuarios = user;
      }, erro => {
        return false;
      }
    );
  }

  removerUsuario(usuario){
    this.usuarioService.removerUsuario(usuario.id).subscribe(
      sucesso => {
        console.log('Usuário ' + usuario.nome + ' removido com sucesso!');

        this.obterUsuarios();
      },
      erro => {
        console.log(erro);
      }
    );

    this.obterUsuarios();
  }
}