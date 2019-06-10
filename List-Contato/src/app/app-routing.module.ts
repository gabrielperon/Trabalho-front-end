import { DetailsContatoComponent } from './components/details-contato/details-contato.component';
import { LoginComponent } from './components/login/login.component';
import { ListaContatoComponent } from './components/lista-contato/lista-contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lista-contato', component: ListaContatoComponent },
  { path: 'details-contato', component: DetailsContatoComponent},
  { path: 'details-contato/:id', component: DetailsContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
