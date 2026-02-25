/* Problem: Bank Account System

Create a constructor function called BankAccount.

Requirements:

Each account should have:

accountHolderName

accountNumber

balance

Add these methods (use prototype 👀):

deposit(amount) → adds money to balance

withdraw(amount) → subtracts money (if balance is enough)

checkBalance() → prints current balance

Create at least 2 accounts and:

Deposit money

Withdraw money

Check balance

 Example Expected Output (just idea)
Ali deposited 5000
Withdrawal successful
Current balance: 8000
Insufficient balance
 Bonus (Harder Level)

Add a method:

transfer(amount, otherAccount)
→ Transfers money from one account to another.

Try to solve it fully using:

Constructor function

Prototype methods

new keyword */

// solution

function BankAccount(accountHolderName, accountNumber, balance) {
  this.accountHolderName = accountHolderName;
  this.accountNumber = accountNumber;
  this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    console.log(this.balance);
  } else {
    console.log("Insufficient balance");
    return;
  }
};
BankAccount.prototype.checkBalance = function () {
  console.log(this.accountHolderName, "Total amount :", this.balance);
};

BankAccount.prototype.transfer = function (accNumber, amount) {
  if (!accNumber || !amount) {
    console.log("Please enter account details ");
    return;
  }
  if (amount <= this.balance) {
    this.balance -= amount;
    accNumber.balance += amount;
    console.log(
      `${this.accountHolderName} transferred ${amount} to ${accNumber.accountNumber}`,
    );
  } else {
    console.log("Insufficient balance for transfer");
  }
};

const asif = new BankAccount("Asif Hussain", "12345", 4000);
const ali = new BankAccount("Ali", "6789", 4000);
console.log(asif, asif.__proto__);
