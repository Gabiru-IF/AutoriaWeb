import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProvaB3-Angular');

  combustibleSelecionado = '';
  valorLitro = 0;
  quantidadeLitros = 0;
  dataAbastecimento = '';

  totalCalculado = 0;
  mostrarResultado = false;
  registroAbastecimento: any[] = [];

  // Armazenar valores exibidos no resultado
  resultadoExibicao: any = {};

  registrarAbastecimento() {
    if (!this.combustibleSelecionado) {
      alert('Por favor, selecione um tipo de combustível!');
      return;
    }

    if (this.valorLitro <= 0 || this.quantidadeLitros <= 0) {
      alert('Valor por litro e quantidade de litros devem ser maiores que zero!');
      return;
    }

    this.totalCalculado = this.valorLitro * this.quantidadeLitros;

    // Armazenar valores para exibição no resultado
    this.resultadoExibicao = {
      combustivel: this.combustibleSelecionado,
      valorLitro: this.valorLitro,
      quantidadeLitros: this.quantidadeLitros,
      data: this.dataAbastecimento,
      total: this.totalCalculado
    };

    this.mostrarResultado = true;

    const registro = {
      combustivel: this.combustibleSelecionado,
      valorLitro: this.valorLitro,
      quantidadeLitros: this.quantidadeLitros,
      data: this.dataAbastecimento,
      total: this.totalCalculado
    };
    this.registroAbastecimento.push(registro);

    this.limparFormulario();
  }

  limparFormulario() {
    this.combustibleSelecionado = '';
    this.valorLitro = 0;
    this.quantidadeLitros = 0;
    this.dataAbastecimento = '';
  }

  // Método para retornar a classe CSS baseado no combustível
  getCombustivelClass(combustivel: string): string {
    switch (combustivel) {
      case 'Gasolina':
        return 'combustivel-gasolina';
      case 'Etanol':
        return 'combustivel-etanol';
      case 'Diesel':
        return 'combustivel-diesel';
      default:
        return '';
    }
  }
}
