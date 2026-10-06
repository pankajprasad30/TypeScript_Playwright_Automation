// When one class acquires the property of another class, this isc called inheritance. 
// 1. single inheritance.  : class A -> class B
// 2. Multi-level inheritance  : class A -> class B -> class C
// 3. Multiple- inheritance : Typescript Does not support multi-inheritance, but we can achieve it with the help of an interface. 
// class A -> class C, class B -> class C

// 4. Hierarchical inheritance : class A -> class B, class A -> class C

// 2. Multi-level inheritance  : class A -> class B -> class C
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

}


// child class / derived class
class SavingAccount extends BankAccount {
    constructor(balance: number) {
        // We create inheritance between two classes, so the parent class constructor has to 
        // be initialized in the child class using the `super` keyword. 
        super(balance)
    }

    withdrawl(amount: number){
        console.log("Amount debited :", amount)
        this.balance -= amount

    }


}

class CurrentAccount extends SavingAccount {
    AccountHolder : string
    constructor(balance: number, AccountHolder: string) {
        // We create inheritance between two classes, so the parent class constructor has to 
        // be initialized in the child class using the `super` keyword. 
        super(balance)
        this.AccountHolder = AccountHolder
    }

    showBalance() {
        console.log("Current Balance :", this.balance)
    }

}

const Obj2 = new CurrentAccount(15000, "Rahul")
Obj2.deposit(20000)
Obj2.showBalance()
Obj2.withdrawl(5000)
Obj2.showBalance()