import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaListaComponent } from './despesa-lista/despesa-lista.component';
import { DespesasRouting } from './despesas.routing';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { DespesaDetalheComponent } from './despesa-detalhe/despesa-detalhe.component';
import { DespesaAnaliseComponent } from './despesa-analise/despesa-analise.component';

@NgModule({
  imports: [
    CommonModule,
    DespesasRouting,
    SharedModule
  ],
  declarations: [DespesaListaComponent, DespesaCadastroComponent, DespesaDetalheComponent, DespesaAnaliseComponent]
})
export class DespesasModule { }
