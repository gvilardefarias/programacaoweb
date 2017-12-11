import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../shared/service/usuario.service';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { AppSocialBaseMaterialModule } from '../shared/app-social-base/app-social-base-material.module';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { LogarUsuarioComponent } from './logar-usuario/logar-usuario.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AppSocialBaseMaterialModule
  ],
  providers: [
    UsuarioService
  ],
  declarations: [CadastrarUsuarioComponent, ListarUsuarioComponent, AtualizarUsuarioComponent, LogarUsuarioComponent]
})
export class UsuarioModule { }

