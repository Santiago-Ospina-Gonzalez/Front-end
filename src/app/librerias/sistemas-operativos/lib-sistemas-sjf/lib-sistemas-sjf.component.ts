import { Component } from '@angular/core';
import { SjfService } from './sjf.service';

@Component({
  selector: 'app-lib-sistemas-sjf',
  templateUrl: './lib-sistemas-sjf.component.html',
  styleUrls: ['./lib-sistemas-sjf.component.css']
})
export class LibSistemasSjfComponent {
  ids = '';
  arrivals = '';
  bursts = '';
  resultado: number[] | null = null;
  error: string | null = null;

  constructor(private sjfService: SjfService) {

  }

  ejecutar() {
    try {
      const request = {
        ids: JSON.parse(this.ids),
        arrivals: JSON.parse(this.arrivals),
        bursts: JSON.parse(this.bursts)
      };

      this.sjfService.ejecutarSJF(request).subscribe({
        next: (res) => {
          this.resultado = res;
          this.error = null;
        },
        error: (err) => {
          this.resultado = null;
          this.error = 'Error al ejecutar el algoritmo SJF';
          console.error(err);
        }
      });
    } catch (e) {
      this.error = 'Entrada no válida. Usa arrays como [1,2,3]';
      this.resultado = null;
    }
  }
}
