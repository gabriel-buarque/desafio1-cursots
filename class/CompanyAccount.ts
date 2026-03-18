import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan(amount: number): void {
        if (!this.getStatus()) {
            console.log('Conta inativa! Emprestimo nao permitido.');
            return;
        }

        if (amount <= 0) {
            console.log('Valor de emprestimo invalido!');
            return;
        }

        const currentBalance = this.getBalance();
        this.setBalance(currentBalance + amount);
        
        console.log(`Emprestimo de R$ ${amount} aprovado!`);
        console.log(`Novo saldo: R$ ${this.getBalance()}`);
    }
}