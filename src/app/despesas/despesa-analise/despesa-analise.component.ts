import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-despesa-analise',
  templateUrl: './despesa-analise.component.html',
  styleUrls: ['./despesa-analise.component.css']
})
export class DespesaAnaliseComponent implements OnInit {

  @ViewChild('graficoRef') graficoRef: ElementRef<any>;
  constructor() { }

  ngOnInit() {

    const myLineChart = new Chart(this.graficoRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Saldo realizado',
          fill: false,
          backgroundColor: 'red',
          borderColor: 'red',
          data: [{ x: new Date(2018, 1, 4), y: 1500.35 }, { x: new Date(2018, 1, 10), y: 950.35 }, { x: new Date(2018, 2, 15), y: 710.35 }]
        }, {
          label: 'Saldo projetado',
          fill: false,
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          data: [{ x: new Date(2018, 2, 16), y: 600.35 }, { x: new Date(2018, 2, 27), y: 550.35 }, { x: new Date(2018, 3, 10), y: 2110.35 }]
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Chart with Multiline Labels'
        },
        elements: {
          line: {
            tension: 0,
          }
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: 'black'
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                month: 'DD/MM/YYYY'
              }
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Data'
            },
            ticks: {
              fontStyle: 'bold',
              fontColor: '#FF0000'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'R$'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
