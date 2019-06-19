import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

let API = "https://boiling-brook-94902.herokuapp.com/transactions"
class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      allTransactions: [],
      displayTransactions: [],
      isLoading: true
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(data=>
      this.setState({
        allTransactions: data,
        displayTransactions: data,
        isLoading: false
      }))
  }

 
  handleChange=(e)=> {
    this.setState({
      displayTransactions: this.state.allTransactions.filter(t=>t.description.toLowerCase().includes(e.target.parentElement.children[0].value.toLowerCase()))||this.state.allTransactions.filter(t=>t.category.toLowerCase().includes(e.target.parentElement.children[0].value.toLowerCase()))
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoading === true ? null : 
        <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList allTransactions={this.state.displayTransactions}/>
        </div>
        }
      </div>
    )
  }
}

export default AccountContainer
