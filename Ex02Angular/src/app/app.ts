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
  protected readonly title = signal('Ex02Angular');
  Celsius: number = 0;
  Fahrenheit: number = 0;
  Estado : string = '';

  converter() {
    this.Fahrenheit = (this.Celsius * 9/5) + 32;
  }
  AtualizarEstado() {
    if (this.Celsius < 0) {
      this.Estado = 'A temperatura está muita fria';
    }
    else if (this.Celsius >= 30) {
      this.Estado = 'A temperatura está muito quente';
    }
    else {
      this.Estado = 'A temperatura está agradável';
    }
  }
}
