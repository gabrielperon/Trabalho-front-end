import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContatoComponent } from './components/lista-contato/lista-contato.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsContatoComponent } from './components/details-contato/details-contato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaContatoComponent,
    LoginComponent,
    DetailsContatoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
