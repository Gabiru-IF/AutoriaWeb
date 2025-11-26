import { Component, NgModule, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExSignal02');

  novoProdutoNome = '';
  novoProdutoQuantidade = 0;
  produtos = signal<{ nome: string; quantidade: number }[]>([]);

  adicionarProduto() {
    const novoProduto = {
      nome: this.novoProdutoNome,
      quantidade: this.novoProdutoQuantidade
    };
    this.produtos.update(produtos => [...produtos, novoProduto]);
    this.novoProdutoNome = '';
    this.novoProdutoQuantidade = 0;
  }

}