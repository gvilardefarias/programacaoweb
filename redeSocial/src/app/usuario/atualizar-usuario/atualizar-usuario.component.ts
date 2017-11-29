import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  
  atualizarUsuario() {
    this.usuarioService.atualizarUsuario(this.usuario);
    this.usuario = new Usuario();
  }
}
