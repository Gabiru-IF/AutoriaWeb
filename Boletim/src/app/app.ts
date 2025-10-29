import { DatePipe, DecimalPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Pipe, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, UpperCasePipe, DatePipe, DecimalPipe, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Boletim');
  
  nome = 0;
  nota1 = 0
  peso1 = 0;
  nota2 = 0;
  peso2 = 0;
  nota3 = 0;
  peso3 = 0;
  nota4 = 0;
  peso4 = 0;
  media = 0;
  resultado = ''
  today = new Date();

  CalcularMedia() {
    const TotalNotas = (this.nota1 * this.peso1) + (this.nota2 * this.peso2) + (this.nota3 * this.peso3) + (this.nota4 * this.peso4);
    const TotalPesos = this.peso1 + this.peso2 + this.peso3 + this.peso4;
    this.media = TotalNotas / TotalPesos;
  }

  atualizarEstado() {
    this.CalcularMedia();
    this.today = new Date();
  }
}

bootstrapApplication(App)

