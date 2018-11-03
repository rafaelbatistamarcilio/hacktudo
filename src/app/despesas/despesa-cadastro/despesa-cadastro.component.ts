import { Despesa } from './../despesa.entity';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormValidationService } from '../../shared/form-validation.service';
import { ToastController } from '@ionic/angular';
import { DespesasService } from '../despesas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.css']
})
export class DespesaCadastroComponent implements OnInit {

  public formObj: FormGroup;
  public idItemEditado: number;
  public defaultDate: Date;

  constructor(
    private formValidationService: FormValidationService,
    private toastController: ToastController,
    private despesaService: DespesasService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(async params => {
      if (params.get('id')) {
        this.idItemEditado = Number(params.get('id'));
        const despesa = await this.despesaService.findById(this.idItemEditado);
        this.setupForm(despesa);
      } else {
        this.setupForm(new Despesa());
      }
    });
  }

  public setupForm(despesa) {
    if (despesa.data != null) {
      const dia = Number(despesa.data.day.value);
      const mes = Number(despesa.data.month.value - 1);
      const ano = Number(despesa.data.year.value);
      this.defaultDate = new Date(ano, mes, dia);
    }

    this.formObj = new FormBuilder().group({
      tipo: [despesa.tipo, Validators.required],
      data: [null, Validators.required],
      valor: [despesa.valor, Validators.required],
      descricao: [despesa.descricao, Validators.required]
    });
  }

  async salvar() {
    this.formValidationService.markFieldsDirty(this.formObj);

    if (this.formObj.invalid) {
      this.exibirMensagem('Preencha o formulário corretamente!');
    } else {

      try {
        const despesa: Despesa = this.formObj.getRawValue();

        if (this.idItemEditado) {
          despesa.id = this.idItemEditado;
          await this.despesaService.update(this.idItemEditado, despesa);
        } else {
          await this.despesaService.add(despesa);
        }
        this.exibirMensagem('Despesa salva com sucesso');
        this.router.navigate(['despesas']);
      } catch (error) {
        this.exibirMensagem('Erro ao salvar despesa: ' + JSON.stringify(error));
      }
    }
  }

  isValid(field: AbstractControl) {
    if (field.invalid && field.dirty) { return 'danger'; }

    if (field.valid && field.dirty) { return 'success'; }

    return '';
  }

  async exibirMensagem(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      closeButtonText: 'Ok',
      showCloseButton: true,
      position: 'bottom'
    });
    toast.present();
  }

  getBackRoute() {
    return this.idItemEditado != null ? 'despesas/' + this.idItemEditado : 'despesas';
  }
}
