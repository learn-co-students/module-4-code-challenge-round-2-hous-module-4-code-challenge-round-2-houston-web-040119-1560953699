import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      fullTrans:[],
      trans:[],
      search:"",
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentWillMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res=>res.json()).then(data=>{
      this.setState({
        fullTrans:data,
        trans:data
      })
    })
  }

  handleChange=(event)=>{
    
    const search = event.target.value.toLowerCase()
    console.log(search)

    let newArr= this.state.fullTrans.filter(x=> x.category.toLowerCase().includes(search) || x.description.toLowerCase().includes(search))
    this.setState({
      trans:newArr
    })

  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} searc={this.state.search}/>
        <TransactionsList trans={this.state.trans}/>
      </div>
    )
  }
}

export default AccountContainer
