import { Despesa } from './../despesa.entity';
import { Component, OnInit } from '@angular/core';
import { DespesasService } from '../despesas.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit {

  constructor(
    public despesaService: DespesasService,
    public router: Router,
    private menuController: MenuController) {
  }

  async ngOnInit() {
    await this.menuController.enable(true, 'app-menu');
    await this.despesaService.updateStore();
  }

  formatarData(data) {
    const membros = data.split('-') as string[];
    return membros.reverse().join('/');
  }

  detalhar(id) {
    this.router.navigate(['/despesas/' + id]);
  }

  async excluir(id) {
    await this.despesaService.remove(id);
  }
}
