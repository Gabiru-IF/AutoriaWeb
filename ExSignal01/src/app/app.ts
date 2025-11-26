import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Temperatura } from './temperatura/temperatura';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Temperatura],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExSignal01');
}
