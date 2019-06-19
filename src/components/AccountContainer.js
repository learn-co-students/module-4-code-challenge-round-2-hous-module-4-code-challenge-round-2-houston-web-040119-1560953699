import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
// const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor() {
    super()
    this.state=({
      transactions:transactions,
      alltranscations:transactions
    })
console.log(this.state.alltranscations)
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

//   componentDidMount(){
//     this.getdata()
//   }

// getData(){
//   fetch(URL)
//   .then(res => res.json())
//   .then(data => {
//     this.setState({

//     })
//   })
// }

  handleChange = (event) => {
   
    console.log(this.state.alltranscations)
let search=event.target.value

  let array = this.state.alltranscations.filter(t=>(t.category.toUpperCase().includes(search.toUpperCase()))
  || t.description.toUpperCase().includes(search.toUpperCase())
  // t.description.toUpperCase().includes(search.toUpperCase())
   this.setState({
    transactions:array
   })
  //  this.state.alltranscations.filter(t=>t.description.includes(search.value))
  }

  render() {

    return (
      <div>
        <Search search={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
