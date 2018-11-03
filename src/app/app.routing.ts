import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PesquisaVagasComponent } from './pesquisa-vagas/pesquisa-vagas.component';
import { DetalheVagaComponent } from './detalhe-vaga/detalhe-vaga.component';
import { AuditoriaVagasComponent } from './auditoria-vagas/auditoria-vagas.component';
import { ReservaVagaComponent } from './reserva-vaga/reserva-vaga.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { DenunciaCadastroComponent } from './denuncia-cadastro/denuncia-cadastro.component';
import { DenunciaDetalheComponent } from './denuncia-detalhe/denuncia-detalhe.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '404', component: NotFoundComponent },

    {
        path: 'vagas/pesquisa',
        component: PesquisaVagasComponent
    },
    {
        path: 'vagas/auditoria',
        component: AuditoriaVagasComponent
    },
    {
        path: 'detalhe-vaga',
        component: DetalheVagaComponent
    },
    {
      path: 'reserva-vaga',
      component: ReservaVagaComponent
    },
    {
      path: 'denuncias/lista',
      component: DenunciasComponent
    },
    {
      path: 'denuncias/cadastro',
      component: DenunciaCadastroComponent
    },
    {
      path: 'denuncias/detalhe/:id',
      component: DenunciaDetalheComponent
    },
    {
        path: 'despesas',
        loadChildren: './despesas/despesas.module#DespesasModule'
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: '**', redirectTo: '404' }

];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
