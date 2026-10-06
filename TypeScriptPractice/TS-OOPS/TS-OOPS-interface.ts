// interface : An interface is a pure abstract class where we declare properties and methods,
//  but we don't initialize it. The implementation has to be done in their child class.

// When one class and one interface are connected to another child class, 
//  then that concept is called multiple inheritance. 

// Achieve multiple inheritance with the two classes. Two classes cannot connect to one single class, 
// so that's the reason that we are connecting one class and one interface to the class. 

interface BankAccount {
    balance: number
    deposit(amount: number): void
    withdrawl(amount: number) : void
}

//parent class
class currentAccount {
    customerName: string
    AccountNumber : number
    constructor(cust_name:string, AccountNumber: number) {
        this.customerName = cust_name
        this.AccountNumber = AccountNumber        
    }

    showAccountDetails() {
        console.log("Account Holder Name:", this.customerName)
        console.log("Account Number:", this.AccountNumber)
    }

}

// child class / derived class
class SavingAccount extends currentAccount implements BankAccount {
    balance: number
    constructor(balance: number, cust_name:string, AccountNumber: number) {
        super(cust_name, AccountNumber)
       this.balance = balance
    }

    withdrawl(amount: number){
        console.log("Amount debited :", amount)
        this.balance -= amount

    }

    deposit(amount: number): void {
        this.balance += amount
    }


    showBalance() {
        console.log("Current Balance :", this.balance)
    }

}

const obj = new SavingAccount(50000, "Raghav", 876677676)
obj.showBalance()
obj.deposit(10000)
obj.showBalance()
obj.withdrawl(15000)
obj.showBalance()
obj.showAccountDetails()