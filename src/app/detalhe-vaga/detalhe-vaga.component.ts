import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.css']
})
export class DetalheVagaComponent implements OnInit {

  // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;


  hasID = true;
  constructor(public router: Router) {  }

  ngOnInit() {
  }

  toggleEditar() {
    this.hasID = !this.hasID;
    // console.log('click' + this.hasID.valueOf);
  }

  reservarVaga(id) {
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
