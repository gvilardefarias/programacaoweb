import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Postagem } from '../model/postagem';

@Injectable()
export class PostagemService {

  apiPostagens = 'http://localhost:3000/postagens';

  constructor(private http: HttpClient) {
  }

  adicionarPostagem(postagem: Postagem) {
    return this.http.post(this.apiPostagens, postagem);
  }

  obterPostagens(): Observable<Postagem[]>{
      return this.http.get<Postagem[]>(this.apiPostagens);
  }

  atualizarPostagem(postagem: Postagem){
    return this.http.patch(`${this.apiPostagens}/${postagem.id}`, postagem);
  }

  removerPostagem(postagem: Postagem){
    return this.http.delete(`${this.apiPostagens}/${postagem.id}`);
  }
}
