import { Vaga } from './../shared/models/vaga.model';
import { VagasService } from './../shared/services/vagas.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.css']
})
export class DetalheVagaComponent implements OnInit {

  // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  vaga: Vaga;
  hasID = true;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private vagasService: VagasService
    ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vaga = this.vagasService.recuperarVagaPorID(Number(params.get('id')));
    });
  }

  toggleEditar() {
    this.hasID = !this.hasID;
    // console.log('click' + this.hasID.valueOf);
  }

  reservarVaga() {
    const id = this.vaga.id;
    this.router.navigate(['vagas/reservar/' + id]);
  }
  // presentPopover(ev) {

  //   const popover = this.popoverCtrl.create(PopoverPage, {
  //     contentEle: this.content.nativeElement,
  //     textEle: this.text.nativeElement
  //   });

  //   popover.present({
  //     ev: ev
  //   });
  // }
}
