import { Component, OnInit } from '@angular/core';
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
    this.usuarios = this.usuarioService.obterUsuarios();
  }

  removerUsuario(nome){
    this.usuarioService.removerUsuario(nome);

    this.obterUsuarios();
  }
}
