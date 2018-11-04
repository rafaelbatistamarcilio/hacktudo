import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Denuncia } from '../shared/models/denuncia.model';
import { DenunciaService } from '../shared/services/denuncia.service';

@Component({
  selector: 'app-denuncia-detalhe',
  templateUrl: './denuncia-detalhe.component.html',
  styleUrls: ['./denuncia-detalhe.component.css']
})
export class DenunciaDetalheComponent implements OnInit {

  denuncia: Denuncia;

  constructor(
    private activateRoute: ActivatedRoute,
    private denunciaService: DenunciaService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(async params => {
      this.denuncia = this.denunciaService.recuperarPorId(Number(params.get('id')));
    });
  }

  detalharUsuario(id) {
    console.log(id); /**@todo detalhar usuário */
  }

  detalharimagem(base64) {
    window.open(base64, '_blank');
  }

  detalharVaga(vagaId) {
    console.log(vagaId); /**@todo detalhar vaga */
  }
}
