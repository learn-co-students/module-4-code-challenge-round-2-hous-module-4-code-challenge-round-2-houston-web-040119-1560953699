import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: transactions,
      searchKeywords: '',
      searchedTransactions: transactions,
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data,
        searchedTransactions: data
      })
    })
  }

  handleChange = (event) => {
    const search = event.target.value
    // debuggere
    this.setState({
      searchKeywords: search,
      searchedTransactions: this.state.transactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase()))
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange.bind(this)}/>
        <TransactionsList searchedTransactions={this.state.searchedTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
