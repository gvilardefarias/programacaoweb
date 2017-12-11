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
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  logar(){
      if(this.usuarioService.logar(this.usuario))
          this.router.navigate(['/postagem/lista']);

      this.usuario = new Usuario();
  }
}
