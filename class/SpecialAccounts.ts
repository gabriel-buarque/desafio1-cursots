import { DioAccount } from './DioAccount';

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit(amount: number): void {
        if (!this.getStatus()) {
            console.log('Conta inativa! Operacao nao permitida.');
            return;
        }

        if (amount <= 0) {
            console.log('Valor de deposito invalido!');
            return;
        }

        const bonus = 10;
        const totalAmount = amount + bonus;
        const currentBalance = this.getBalance();
        
        this.setBalance(currentBalance + totalAmount);
        
        console.log(`Deposito de R$ ${amount} + Bonus de R$ ${bonus} realizado!`);
        console.log(`Total creditado: R$ ${totalAmount}`);
        console.log(`Novo saldo: R$ ${this.getBalance()}`);
    }
}