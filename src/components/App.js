import React, { Component } from 'react'
import AccountContainer from './AccountContainer'
import { transactions } from '../transactionsData'
import '../stylesheets/App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
    transactions: [],
    displayTransaction: []
    }
  }
 
  

  componentDidMount(){
    console.log(transactions)
    this.setState({
      transactions: transactions,
    

    })
    
  }
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        <AccountContainer transactions={this.state.transactions}/>

      </div>
    )
  }
}

export default App
