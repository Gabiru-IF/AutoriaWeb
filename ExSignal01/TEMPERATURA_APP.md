# Aplicativo de Controle de Temperatura - ExSignal01

## Sobre o Projeto

Este projeto demonstra o uso de **Angular Signals** - a nova abordagem reativa do Angular para gerenciar estado da aplicação.

## Arquitetura

### Componente Temperatura (`temperatura.ts`)

O componente usa três conceitos principais:

#### 1. **Signal** - Estado Reativo
```typescript
temperaturaAtual = signal(22);
```
- Armazena o valor da temperatura (começa em 22°C)
- Qualquer mudança no signal dispara atualizações automáticas na template

#### 2. **Computed** - Valores Derivados
```typescript
mensagemTemperatura = computed(() => {
  const temp = this.temperaturaAtual();
  if (temp < 18) return 'Ambiente frio';
  else if (temp >= 18 && temp <= 25) return 'Temperatura confortável';
  else return 'Ambiente quente';
});
```
- Cria um valor derivado baseado no signal
- Atualiza automaticamente quando `temperaturaAtual` muda
- Sem necessidade de manual change detection

#### 3. **Effect** - Efeitos Colaterais
```typescript
effect(() => {
  const temp = this.temperaturaAtual();
  console.log(`🌡️ Temperatura mudou para: ${temp}°C`);
});
```
- Executa automaticamente quando `temperaturaAtual` muda
- Perfeito para logging, validações ou sincronização

### Métodos de Controle

- `aumentarTemperatura()`: Incrementa em +1°C
- `diminuirTemperatura()`: Decrementa em -1°C
- `resetarTemperatura()`: Retorna para 22°C

## Template (`temperatura.html`)

- Exibe a temperatura com formatação de número (sem casas decimais)
- Mostra a mensagem reativa baseada na temperatura
- Três botões com emojis para interação

## Estilos (`temperatura.css`)

- Design moderno com gradiente roxo
- Animação de entrada suave
- Botões coloridos com estados hover/active
- Responsivo para dispositivos móveis
- Breakpoint: 600px

## Como Usar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar o servidor de desenvolvimento:**
   ```bash
   ng serve --open
   ```

3. **Testar:**
   - Clique nos botões para alterar a temperatura
   - Observe a mensagem mudar automaticamente
   - Abra o console do navegador para ver os logs do effect

## Comandos no Terminal

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (localhost:4200)
ng serve --open

# Compilar para produção
ng build

# Rodar testes unitários
ng test
```

## Aprendizados Chave

1. **Signals** é a substituição moderna do RxJS/Observables para casos simples
2. **Computed** elimina a necessidade de lógica na template
3. **Effect** permite reações declarativas a mudanças de estado
4. Não precisa mais de `ChangeDetectionStrategy.OnPush` - signals fazem isso por padrão
5. Melhor performance e código mais legível

## Próximos Passos

- Adicionar persistência (localStorage) para salvar temperatura
- Integrar com um sensor de temperatura real via API
- Adicionar histórico de mudanças de temperatura
- Implementar regras de conforto por hora do dia
