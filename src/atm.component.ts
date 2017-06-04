import {Component} from '@angular/core'
import {AtmService} from './atm.service'
import {Transaction} from './transaction.model'

@Component({
  selector: 'atm',
  template: `
    <h1>Welcome to the Angular 2 Bank</h1>
    <div>Balance: {{balance}}</div>
    Amount: <input #amount type="number" required><br>
    <button (click)="deposit(amount.value)">Deposit</button>
    <button (click)="withdraw(amount.value)">Withdraw</button>
  `
})

export class AtmComponent {
  balance:string
  atmService:AtmService
  constructor(private atmService:AtmService) {
    this.atmService = atmService
    this.balance = this.atmService.getBalance()
    this.balance = this.balance.toFixed(2)
    this.balance = '$' + this.balance
  }
  private deposit(value: string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance + amount
    this.changeBalance(serviceBalance, amount, 'Deposit')
  }
  private withdraw(value: string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance - amount
    this.changeBalance(serviceBalance, amount, 'Withdraw')
  }
  private changeBalance(serviceBalance:number, amount:number, type:string) {
    this.atmService.setBalance(serviceBalance)
    amount = amount.toFixed(2)
    if (serviceBalance < 0) {
      serviceBalance = Math.abs(serviceBalance)
      serviceBalance = serviceBalance.toFixed(2)
      this.balance = '($' + serviceBalance + ')'
    } else {
      serviceBalance = serviceBalance.toFixed(2)
      this.balance = '$' + serviceBalance
    }
    let date =  new Date()
    let transaction:Transaction = new Transaction(date, type, '$' + amount, this.balance)
    this.atmService.addTransaction(transaction)
  }
}