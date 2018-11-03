import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Denuncia } from '../shared/models/denuncia.model';
import { Usuario } from '../shared/models/usuario.model';
import { Quarteirao } from '../shared/models/quateirao.model';
import { Vaga } from '../shared/models/vaga.model';
import { VagasService } from '../shared/services/vagas.service';

@Component({
  selector: 'app-denuncia-cadastro',
  templateUrl: './denuncia-cadastro.component.html',
  styleUrls: ['./denuncia-cadastro.component.css']
})
export class DenunciaCadastroComponent implements OnInit {

  imagem: string;
  form: FormGroup;
  usuarioLogado: Usuario;
  quarteirao: Quarteirao;
  dataAtual: Date;

  constructor(private vagasService: VagasService) {
    this.imagem = 'https://image.flaticon.com/icons/svg/23/23765.svg';
    this.dataAtual = new Date();
    this.quarteirao = this.vagasService.recuperarVagas()[0];
  }

  ngOnInit() {
    /** @todo buscar quateirão pela posição do usuário*/
    this.preencherFomrulario(new Denuncia());
  }

  preencherFomrulario(denuncia: Denuncia) {
    this.form = new FormBuilder().group({
      descricao: [denuncia.descricao, Validators.required],
      placaInfrator: [denuncia.placaInfrator, Validators.required],
      relator: [denuncia.relator, null],
      imagem: [denuncia.imagem, Validators.required],
      data: [denuncia.data, Validators.required],
      vaga: [denuncia.vaga, Validators.required],
    });
  }

  capturarImagem() {
    const input: any = document.createElement('input');
    input.type = 'file';
    input.accept = 'image';
    input.capture = 'camera';
    input.click();
    input.onchange = (event: any) => this.extractImage(event.target.files[0]);
  }

  extractImage(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imagem = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  vincularVaga(vagaId) {
    const vaga = new Vaga();
    vaga.id = vagaId;
    this.form.get('vaga').setValue(vaga);
  }

  salvar() {
    const dados = this.form.getRawValue() as Denuncia;
    dados.relator = this.usuarioLogado;
    dados.imagem = this.imagem;
    console.log(this.form.getRawValue());
  }
}
