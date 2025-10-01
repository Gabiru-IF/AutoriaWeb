import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = 'fodase';
  Comodo: string = "";
  EstadoLuz = false;
  botao_muda = document.getElementById('Estadoluz');

  botao_mudar() {
    if (this.EstadoLuz === false) {
      this.EstadoLuz = true;
      
    }
    else {
      this.EstadoLuz = false;
    }

  }
}
