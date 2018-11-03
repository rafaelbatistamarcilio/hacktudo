import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DespesasService } from '../despesas.service';
import { Despesa } from '../despesa.entity';

@Component({
  selector: 'app-despesa-detalhe',
  templateUrl: './despesa-detalhe.component.html',
  styleUrls: ['./despesa-detalhe.component.css']
})
export class DespesaDetalheComponent implements OnInit {

  public despesa: Despesa;

  constructor(
    private route: ActivatedRoute,
    private despesasService: DespesasService,
    private router: Router) { }

  ngOnInit() {
    this.buscarDespesa();
  }

  buscarDespesa() {
    this.route.paramMap.subscribe(async params => {
      this.despesa = await this.despesasService.findById(Number(params.get('id')));
    });
  }

  public formatarData(data) {
    return data.day.value + '/' + data.month.value + '/' + data.year.value;
  }

  public editar(id) {
    this.router.navigate(['despesas/edicao/' + id]);
  }
}
