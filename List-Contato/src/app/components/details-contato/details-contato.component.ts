import { GetContatosResponse } from './../../models/get-contatos-response.model';
import { UpdateContatoRequest } from './../../models/update-contato-request.model';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InsertContatoRequest } from '../../models/insert-contato-request.model';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-details-contato',
  templateUrl: './details-contato.component.html',
  styleUrls: ['./details-contato.component.scss']
})
export class DetailsContatoComponent implements OnInit {
  contatoID: number;

  constructor(
    private router: Router,
    private contatoService: ContatoService,
    private activatedRoute: ActivatedRoute
  ) {}

  contato = new InsertContatoRequest();

  ngOnInit() {
debugger;

    this.contatoID = this.activatedRoute.snapshot.params.id;

    if(this.contatoID){
      // fazer um GET na API passando o contatoID e trazendo os detalhes do contato para jogar 
      // nos campos do editar

      // Fazer um metodo novo na contato.service e chamar aqui usando como exemplo o ngOnInit da 
      // lista-contato.component.ts
      
      // preencher a contatoRequest logo apos o retorno com os dados retornados da API
    

      this.contatoService.getContato(this.contatoID).subscribe(res => {
        this.contato.email = res[0].email;
        this.contato.nome = res[0].nome;
        this.contato.telefone = res[0].telefone;
        
      })
    }
  }

  salvar() {

    if(this.contatoID){
    

      const updateContatoRequest = new UpdateContatoRequest();

      updateContatoRequest.id = this.contatoID;
      updateContatoRequest.nome = this.contato.nome;
      updateContatoRequest.email = this.contato.email;
      updateContatoRequest.telefone = this.contato.telefone;
       
      this.contatoService.updateContato(updateContatoRequest).subscribe(res => {
        alert('Contato atualizado');

        this.router.navigateByUrl('/lista-contato');
      });

    }else{
      this.contatoService.insertContato(this.contato).subscribe(res => {
        alert('inseri');
  
        this.router.navigateByUrl('/lista-contato');
      });
    }

  }
  cancelar() {
    this.router.navigateByUrl('/lista-contato');
  }


}
