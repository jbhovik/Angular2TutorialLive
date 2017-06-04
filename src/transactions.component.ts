import {Component} from '@angular/core'
import {AtmService} from './atm.service'
import {Transaction} from './transaction.model'

@Component({
  selector: 'transactions',
  template: `
    <h2>Transaction History</h2>
    <table border="1">
      <th>Date</th>
      <th>Type</th>
      <th>Amount</th>
      <th>Balance</th>
      <tr *ngFor="let row of transactions">
        <td>{{row._date | date: 'dd/MM/yyyy hh:mm:ss a'}}</td>
        <td>{{row._type}}</td>
        <td>{{row._amount}}</td>
        <td>{{row._balance}}</td>
      </tr>
    </table>
  `
})

export class TransactionsComponent {
  atmService:AtmService
  transactions:Transaction[]
  constructor(atmService:AtmService) {
    this.atmService = atmService
    this.transactions = this.atmService.getTransactions()
  }
}