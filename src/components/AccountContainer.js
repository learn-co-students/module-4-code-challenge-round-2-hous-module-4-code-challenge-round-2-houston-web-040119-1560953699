import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      trans: transactions,
      eventFilter: [],
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount = () => {
    this.goFetch()
  }

  goFetch = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        trans: data
      })
    })
  }

  handleChange(event) {
    
    let arr = this.state.trans.filter(event => event.description.toLowerCase().includes(event.description) 
    && event.category.toLowerCase().includes(event.category))

    this.setState({
      eventFilter: arr
    })
  }

  render() {
    // console.log(this.state.trans)
    return (
      <div>
        <Search onChange={event => this.handleChange(event)} />
        <TransactionsList trans={this.state.trans}/>
      </div>
    )
  }
}

export default AccountContainer
