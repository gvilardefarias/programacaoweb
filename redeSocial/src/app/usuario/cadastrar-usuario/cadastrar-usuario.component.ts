import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  id = 3;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(
      sucesso => {
        console.log('Usuário ' + this.usuario.nome + ' cadastrado com sucesso!');
        this.usuario = new Usuario();
      },
      erro => {
        console.log(erro);
      }
    );
  }
}

