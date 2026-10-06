

// 4. Hierarchical inheritance : class A -> class B, class A -> class C
// When one parent class is connected to two child classes, then it is called hierarchical inheritance. 
//parent class / base class
class BankAccount {
    balance: number
    constructor(balanceV: number) {
        this.balance = balanceV
    }

    deposit(amount: number) {
        console.log("Amount credited:", amount)
        this.balance += amount
    }

     showBalance() {
        console.log("Current Balance :", this.balance)
    }

}


// child class / derived class
class SavingAccount extends BankAccount {
    constructor(balance: number) {
        // We create inheritance between two classes, so the parent class constructor has to 
        // be initialized in the child class using the `super` keyword. 
        super(balance)
    }

    withdrawl(amount: number){
        console.log("Amount debited from Saving Account :", amount)
        this.balance -= amount

    }

}


class CurrentAccount extends BankAccount {
    AccountHolder : string
    constructor(balance: number, AccountHolder: string) {
        // We create inheritance between two classes, so the parent class constructor has to 
        // be initialized in the child class using the `super` keyword. 
        super(balance)
        this.AccountHolder = AccountHolder
    }

    withdrawl(amount: number){
        console.log("Amount debited from Current Account :", amount)
        this.balance -= amount

    }


}

// BankAccount -> Saving Account class
// BankAccount -> Current Account class

const CurrObj = new CurrentAccount(6000, "Rahul")
CurrObj.showBalance()
CurrObj.deposit(7000)
CurrObj.showBalance()
CurrObj.withdrawl(3000)
CurrObj.showBalance()

console.log("--------------------------------")
const SaveObj = new SavingAccount(80000)
SaveObj.showBalance()
SaveObj.deposit(10000)
SaveObj.showBalance()
SaveObj.withdrawl(15000)
SaveObj.showBalance()