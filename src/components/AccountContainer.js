import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      displayTransaction: transactions
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange=(event) =>{
    const value = event.target.value
    this.setState({

      displayTransaction: this.state.displayTransaction.filter(trans => trans.description.includes(value))
    
    })
  console.log(this.state.displayTransaction)
  console.log(value)

  }

  render() {
//  console.log(this.props.)
    return (
      <div>
        <Search transe={this.handleChange}/>
        {this.state.displayTransaction.map(trans => <TransactionsList trans={trans}/>)}
        
      </div>
    )
  }
}

export default AccountContainer
