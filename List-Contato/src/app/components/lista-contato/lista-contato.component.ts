import { GetContatosResponse } from './../../models/get-contatos-response.model';
import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.scss']
})
export class ListaContatoComponent implements OnInit {
  constructor(private router: Router, private contatoService: ContatoService) {}

  contatos: GetContatosResponse[];

  ngOnInit() {
    this.carregarContatos();
  }

  private carregarContatos() {
    this.contatoService.getContatos().subscribe(retornoDaAPI => {
      this.contatos = retornoDaAPI;
    });
  }

  adicionar() {
    this.router.navigateByUrl('/details-contato');
  }

  editar(id: number) {
    this.router.navigateByUrl('/details-contato/' + id);
  }


  excluir(id: number) {
    this.contatoService.deleteContato(id).subscribe(res =>{
      alert('Usuario excluído');
      this.carregarContatos();
    })
  }
}

