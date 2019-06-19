import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: transactions,
      displayTransactions: transactions,
      search: ""

    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(obj => {
      this.setState({
        transactions: obj,
        displayTransactions: obj
      })
    })

  }

  handleChange = (e) => {
    let value = e.target.value
    let newDisplay = this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(value.toLowerCase()) || transaction.category.toLowerCase().includes(value.toLowerCase()))

    console.log(this.state.transactions)
    this.setState({
      displayTransactions: newDisplay,
      search: value
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <TransactionsList displayTransactions={this.state.displayTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
