//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AtmComponent} from './atm.component'
import {AtmService} from './atm.service'
import {TransactionsComponent} from './transactions.component'

@Component({
  selector: 'my-app',
  template:`
    <atm></atm>
    <transactions></transactions>
  `,
  providers: [AtmService]
})

export class App {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    App,
    AtmComponent,
    TransactionsComponent
  ],
  bootstrap: [App],
})
export class AppModule {}