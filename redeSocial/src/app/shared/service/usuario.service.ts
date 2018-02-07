import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService {
  apiUsuarios = 'http://localhost:3000/usuarios';
  user = null;

  constructor(private http: HttpClient) {
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.apiUsuarios, usuario);
  }

  obterUsuarios(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.apiUsuarios);
  }

  obterUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUsuarios}/${idUsuario}`);
  }

  removerUsuario(idUsuario: number){
    return this.http.delete(`${this.apiUsuarios}/${idUsuario}`);
  }

  atualizarUsuario(usuario: Usuario){
    return this.http.patch(`${this.apiUsuarios}/${usuario.id}`, usuario);
  }

  logar(usuario){
    this.obterUsuario(usuario.id).subscribe(
      user => {
        this.user = user;
      }, erro => {
        return false;
      }
    );

    if(this.user.email==usuario.email && this.user.senha==usuario.senha)
      return true;
    
    return false;
  }
}

