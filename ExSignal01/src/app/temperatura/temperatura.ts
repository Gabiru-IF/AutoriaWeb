import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css',
})
export class Temperatura {
  // Signal para armazenar a temperatura atual
  temperaturaAtual = signal(22);

  // Computed para gerar mensagem baseada na temperatura
  mensagemTemperatura = computed(() => {
    const temp = this.temperaturaAtual();
    if (temp < 18) {
      return 'Ambiente frio';
    } else if (temp >= 18 && temp <= 25) {
      return 'Temperatura confortável';
    } else {
      return 'Ambiente quente';
    }
  });

  constructor() {
    // Effect para informar toda vez que a temperatura muda
    effect(() => {
      const temp = this.temperaturaAtual();
      console.log(`🌡️ Temperatura mudou para: ${temp}°C`);
    });
  }

  // Métodos para alterar a temperatura
  aumentarTemperatura() {
    this.temperaturaAtual.set(this.temperaturaAtual() + 1);
  }

  diminuirTemperatura() {
    this.temperaturaAtual.set(this.temperaturaAtual() - 1);
  }

  resetarTemperatura() {
    this.temperaturaAtual.set(22);
  }
}
