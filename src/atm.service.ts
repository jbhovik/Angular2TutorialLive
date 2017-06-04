import {Injectable} from '@angular/core'
import {Transaction} from './transaction.model'

@Injectable()
export class AtmService {
  private balance:number
  private transactions:Transaction[] = []
  constructor() {
    this.balance = 1000
  }
  setBalance(val) {
    this.balance = val;
  }
  getBalance(val) {
    return this.balance;
  }
  addTransaction(transaction:Transaction) {
    this.transactions.push(transaction)
  }
  getTransactions() {
    return this.transactions
  }
}