import { Component } from '@angular/core';
import { PuntoEquilibrioRequest, PuntoEquilibrioResponse } from './punto-equilibrio.model';
import { PuntoEquilibrioService } from './punto-equilibrio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lib-punto-equilibrio',
  templateUrl: './lib-punto-equilibrio.component.html',
  styleUrls: ['./lib-punto-equilibrio.component.css']
})
export class LibPuntoEquilibrioComponent {
  costofijo: number = 0;
  precioVenta: number = 0;
  costovariable: number = 0;
  resultado: number | null = null;
  error: string = '';

  constructor(private puntoEquilibrioService: PuntoEquilibrioService) {}

  calcular(): void {
    this.error = '';
    if (
      this.costofijo === null || this.precioVenta === null || this.costovariable === null ||
      this.costofijo === undefined || this.precioVenta === undefined || this.costovariable === undefined ||
      this.costofijo === 0 || this.precioVenta === 0 || this.costovariable === 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos requeridos',
        text: 'Por favor, complete todos los campos con valores válidos.',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.puntoEquilibrioService.calcularPuntoEquilibrio({
      costofijo: this.costofijo,
      precioVenta: this.precioVenta,
      costovariable: this.costovariable
    }).subscribe({
      next: (res: PuntoEquilibrioResponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Punto de Equilibrio',
          text: `El punto de equilibrio es: ${res.resultado}`,
          confirmButtonText: 'Aceptar'
        });
        this.resultado = res.resultado;
      },
      error: err => {
        this.error = 'Error al calcular el punto de equilibrio.';
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo calcular el punto de equilibrio.',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }
}
