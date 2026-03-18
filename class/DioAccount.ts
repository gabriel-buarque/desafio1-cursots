export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName(): string {
        return this.name;
    }

    getAccountNumber(): number {
        return this.accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    getStatus(): boolean {
        return this.status;
    }

    protected setBalance(value: number): void {
        this.balance = value;
    }

    deposit(amount: number): void {
        if (this.validateStatus()) {
            return;
        }

        if (amount <= 0) {
            console.log('Valor de deposito invalido!');
            return;
        }

        this.balance += amount;
        console.log(`Deposito de R$ ${amount} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (!this.validateStatus()) {
            return;
        }

        if (amount <= 0) {
            console.log('Valor de saque invalido!');
            return;
        }

        if (this.balance < amount) {
            console.log('Saldo insuficiente para saque!');
            console.log(`Saldo atual: R$ ${this.balance}`);
            return;
        }

        this.balance -= amount;
        console.log(`Saque de R$ ${amount} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${this.balance}`);
    }

    private validateStatus(): boolean {
        if (!this.status) {
            console.log('Conta inativa! Operacao nao permitida.');
            return false;
        }
        return true;
    }

    showAccountInfo(): void {
        console.log(`Nome: ${this.name}`);
        console.log(`Conta: ${this.accountNumber}`);
        console.log(`Saldo: R$ ${this.balance}`);
        console.log(`Status: ${this.status ? 'Ativa' : 'Inativa'}`);
       
    }
}