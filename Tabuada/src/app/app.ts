import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  template: `
    <h2>Tabuada</h2>
    <hr />
    <form (ngSubmit)="mostrarResultados()">
      <label for="numero">Número:</label>
      <input id="numero" type="number" [(ngModel)]="numeroDigitado" name="numero" required />
      <button type="submit">Calcular</button>
    </form>
    <hr />
    <ng-container *ngIf="mostrar">
      Resultado:
      <ul>
        @for (numero of numeros; track numero) {
          <li>{{numero}} x {{numeroDigitado}} = {{numero * numeroDigitado}}</li>
        }
      </ul>
      <ul>
        @for (numero of numeros; track numero) {
          <li>{{numero}} + {{numeroDigitado}} = {{numero + numeroDigitado}}</li>
        }
      </ul>
      <ul>
        @for (numero of numeros; track numero) {
          <li>{{numero}} ÷ {{numeroDigitado}} = {{numero / numeroDigitado}}</li>
        }
      </ul>
    </ng-container>
  `
})
export class App {
  protected readonly title = signal('AngularProject');
  numeroDigitado = 1;
  mostrar = false;
  numeros = [0,1,2,3,4,5,6,7,8,9,10];

  mostrarResultados() {
    this.mostrar = true;
  }
}
