import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../shared/services/reserva.service';
import { Reserva } from '../shared/models/reserva.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-lista',
  templateUrl: './reservas-lista.component.html',
  styleUrls: ['./reservas-lista.component.css']
})
export class ReservasListaComponent implements OnInit {

  reservas: Reserva[];

  constructor(private reservasService: ReservaService,
    private router: Router) {
    this.reservas = [];
  }

  ngOnInit() {
    this.reservas = this.reservasService.buscarTodas();
  }

  detalhar(id) {
    this.router.navigate(['vagas/reservar/' + id]);
  }

}
