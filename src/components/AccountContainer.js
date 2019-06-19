import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const url = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      display: [],
      loading: true
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let arr = data
      this.setState({
        transactions: arr,
        display: arr,
        loading: false
      })
    })




    // let arr = transactions
    // this.setState({
    //   loading: false,
    //   transactions: arr, 
    //   display: arr
    // })
  }

  handleChange(event) {
    // your code here
    const i = event.target.value
    // debugger
    // // debugger   .filter(transaction => transaction.description.includes(event.nativeEvent.data))
    if(i != ""){
    let arr = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(i.toLowerCase() || transaction.category.toLowerCase().includes(i.toLowerCase)))
    this.setState({
      display: arr
    })}
    if(i === ""){
      let arr = this.state.transactions
      this.setState({
        display: arr
      })
    }
  }


  render() {

    return (
      <div>
        <Search onChange={this.handleChange.bind(this)} />
        {this.state.loading ? console.log("loading...") : <TransactionsList transactions={this.state.display} />}
      </div>
    )
  }
}

export default AccountContainer
