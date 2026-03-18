import { PeopleAccount } from './PeopleAccount';
import { CompanyAccount } from './CompanyAccount';
import { SpecialAccount } from './SpecialAccounts';

console.log('========== SISTEMA BANCARIO DIO ==========\n');

console.log('TESTANDO PEOPLE ACCOUNT\n');

const peopleAccount = new PeopleAccount(123456789, 'Gabriel Buarque', 1001);
peopleAccount.showAccountInfo();

peopleAccount.deposit(500);
peopleAccount.withdraw(200);
peopleAccount.withdraw(500);

peopleAccount.showAccountInfo();


console.log('\nTESTANDO COMPANY ACCOUNT\n');

const companyAccount = new CompanyAccount('DIO Tecnologia LTDA', 2001);
companyAccount.showAccountInfo();

companyAccount.deposit(10000);
companyAccount.getLoan(5000);
companyAccount.withdraw(3000);

companyAccount.showAccountInfo();


console.log('\nTESTANDO SPECIAL ACCOUNT\n');

const specialAccount = new SpecialAccount('Maria Silva', 3001);
specialAccount.showAccountInfo();

specialAccount.deposit(100);
specialAccount.deposit(200);
specialAccount.withdraw(50);

specialAccount.showAccountInfo();


console.log('\nTESTANDO VALIDACOES\n');

const testAccount = new PeopleAccount(987654321, 'Joao Santos', 4001);

testAccount.deposit(-50);
testAccount.deposit(0);
testAccount.withdraw(100);
testAccount.deposit(500);
testAccount.withdraw(600);

testAccount.showAccountInfo();


