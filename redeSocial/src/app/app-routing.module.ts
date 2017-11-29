import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { AtualizarUsuarioComponent } from './usuario/atualizar-usuario/atualizar-usuario.component';
import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
  {
    path: 'usuario/cadastro',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'usuario/lista',
    component: ListarUsuarioComponent
  },
  {
    path: 'usuario/atualiza',
    component: AtualizarUsuarioComponent
  }
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}