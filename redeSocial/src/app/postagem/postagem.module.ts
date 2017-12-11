import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPostagemComponent } from './listar-postagem/listar-postagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSocialBaseMaterialModule } from '../shared/app-social-base/app-social-base-material.module';
import { PostagemService } from '../shared/service/postagem.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AppSocialBaseMaterialModule
  ],
  providers: [
    PostagemService
  ],
  declarations: [ListarPostagemComponent]
})
export class PostagemModule { }
