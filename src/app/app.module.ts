import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { PesquisaVagasComponent } from './pesquisa-vagas/pesquisa-vagas.component';
import { AgmCoreModule } from '@agm/core';
import { DetalheVagaComponent } from './detalhe-vaga/detalhe-vaga.component';
import { ReservaVagaComponent } from './reserva-vaga/reserva-vaga.component';
import { AuditoriaVagasComponent } from './auditoria-vagas/auditoria-vagas.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { DenunciaCadastroComponent } from './denuncia-cadastro/denuncia-cadastro.component';
import { DenunciaDetalheComponent } from './denuncia-detalhe/denuncia-detalhe.component';
import { VagasDisponiveisComponent } from './vagas-disponiveis/vagas-disponiveis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,

    PesquisaVagasComponent,
    DetalheVagaComponent,
    ReservaVagaComponent,
    AuditoriaVagasComponent,
    DenunciasComponent,
    DenunciaCadastroComponent,
    DenunciaDetalheComponent,
    VagasDisponiveisComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    IonicModule.forRoot({
      mode: 'md'
    }),
    AgmCoreModule.forRoot({
      apiKey: environment.AMG_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
