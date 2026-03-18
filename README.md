# 🏦 Sistema Bancário DIO - TypeScript

Sistema bancário desenvolvido em TypeScript aplicando conceitos avançados de Programação Orientada a Objetos (POO).

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do desafio do bootcamp da DIO, com foco em aplicar conceitos de POO como herança, encapsulamento, classes abstratas e polimorfismo.

## 🚀 Funcionalidades

### Tipos de Conta

- **PeopleAccount** (Conta Pessoa Física)
  - Depósitos
  - Saques
  - Consulta de saldo

- **CompanyAccount** (Conta Empresa)
  - Todas funcionalidades da conta pessoa física
  - Empréstimos (getLoan)

- **SpecialAccount** (Conta Especial)
  - Depósitos com bônus de R$ 10
  - Saques
  - Consulta de saldo

### Validações Implementadas

- ✅ Verificação de conta ativa
- ✅ Validação de saldo suficiente para saques
- ✅ Validação de valores positivos
- ✅ Proteção de atributos com encapsulamento

## 🛠️ Tecnologias Utilizadas

- TypeScript
- Node.js
- Programação Orientada a Objetos (POO)

## 📁 Estrutura do Projeto
```
├── DioAccount.ts          # Classe abstrata base
├── PeopleAccount.ts       # Conta pessoa física
├── CompanyAccount.ts      # Conta empresa
├── SpecialAccount.ts      # Conta especial com bônus
└── app.ts                 # Arquivo de testes
```

## 🔧 Como Executar

### Pré-requisitos

- Node.js instalado
- TypeScript instalado globalmente
```bash
npm install -g typescript
```

### Instalação

1. Clone o repositório
```bash
git clone [seu-repositorio]
```

2. Compile o TypeScript
```bash
tsc
```

3. Execute o projeto
```bash
node app.js
```

Ou use o ts-node:
```bash
npm install -g ts-node
ts-node app.ts
```

## 💻 Exemplo de Uso
```typescript
import { PeopleAccount } from './PeopleAccount';

const account = new PeopleAccount(123456789, 'Gabriel Buarque', 1001);
account.deposit(500);
account.withdraw(200);
account.showAccountInfo();
```

## 🎯 Desafios Implementados

- [x] Implementar métodos deposit() e withdraw() na DioAccount
- [x] Implementar método getLoan() na CompanyAccount
- [x] Criar SpecialAccount com depósito bonificado
- [x] Tornar todos os atributos privados
- [x] Atributos name e accountNumber imutáveis (readonly)
- [x] Criar instâncias e testar todas as funcionalidades

## 📊 Conceitos de POO Aplicados

- **Abstração**: Classe abstrata DioAccount
- **Herança**: Todas as contas herdam de DioAccount
- **Encapsulamento**: Atributos privados com getters
- **Polimorfismo**: Override do método deposit() na SpecialAccount

## 🧪 Testes

O arquivo `app.ts` contém testes completos de:
- Depósitos e saques
- Empréstimos
- Validações de conta inativa
- Validações de saldo insuficiente
- Conta especial com bônus

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do bootcamp DIO.

## 👨‍💻 Autor

**Gabriel Buarque**

LinkedIn: [www.linkedin.com/in/gabriel-buarque-888101301]
GitHub: [gabriel-buarque]


