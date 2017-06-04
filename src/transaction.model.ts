export class Transaction {
  private _date:string
  private _type:string
  private _amount:string
  private _balance:string
  constructor(date:string, type:string, amount:string, balance:string) {
    this._date = date
    this._type = type
    this._amount = amount
    this._balance = balance
  }
}