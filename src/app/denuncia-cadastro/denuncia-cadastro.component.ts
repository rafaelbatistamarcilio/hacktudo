import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncia-cadastro',
  templateUrl: './denuncia-cadastro.component.html',
  styleUrls: ['./denuncia-cadastro.component.css']
})
export class DenunciaCadastroComponent implements OnInit {

  imagem: string;

  constructor() {
    this.imagem = 'https://image.flaticon.com/icons/svg/23/23765.svg';
  }

  ngOnInit() {
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

}
