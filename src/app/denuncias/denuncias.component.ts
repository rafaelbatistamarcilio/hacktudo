import { Component, OnInit } from '@angular/core';
import { Denuncia } from '../shared/models/denuncia.model';
import { DenunciaService } from '../shared/services/denuncia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {

  denuncias: Denuncia[];

  constructor(
    private denunciaService: DenunciaService,
    private router: Router) {
    this.denuncias = this.denunciaService.recuperarDenuncias();
  }

  ngOnInit() {
  }

  detalharDenuncia(id) {
    this.router.navigate(['denuncias/detalhe/' + id]);
  }
}
