import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar-usuario',
  templateUrl: './logar-usuario.component.html',
  styleUrls: ['./logar-usuario.component.css']
})
export class LogarUsuarioComponent implements OnInit {
  user: Usuario = new Usuario();
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  logar(){
      this.usuarioService.obterUsuarios().subscribe(
        users => {
          for(var i=0;i<users.length;i++){
            if(users[i].email==this.usuario.email){
              console.log(users[i]);
              this.user = users[i];
            }
          }
        
          if(this.user.email==this.usuario.email && this.user.senha==this.usuario.senha)
            this.router.navigate(['/postagem/lista']);
          else
            this.usuario = new Usuario();
        }, erro => {
          return false;
        }
      );
  }
}

