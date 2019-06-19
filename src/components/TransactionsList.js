import React from 'react'

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              
              {props.trans.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
           
              {props.trans.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              
              {props.trans.category}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
          
              {props.trans.amount}
            </h3>
          </th>
        </tr>

        {"... your code here..."}

      </tbody>
    </table>
  )
}

export default TransactionsList
