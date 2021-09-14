import React, { Component } from "react";
import {connect} from 'react-redux';
import { ListGroup } from 'reactstrap';
import moment from 'moment';
import {fetchExpense} from '../actions/expense_actions'
import { AddForm,ExpenseItem,MonthSelector,Spinner} from "../components";


class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: moment().month()
    }
    console.log(`Selected State ${this.state.selected} `)
  }
  componentDidMount(){
    this.getExpense();
  }
  onSelectMonth(month){
  this.setState({selected:month})
  this.getExpense(month);

  }
  getExpense(month){
    const {fetchExpense} = this.props;
    fetchExpense(month);
  }
  render() {
    const {selected} =this.state
    const {fetching,expense} =this.props;
    if(fetching){
      return <Spinner />
    }
    return (
      <div style={{marginTop:30}}>
     <MonthSelector 
     onSelectMonth={this.onSelectMonth.bind(this)}
     selected ={selected} />
 <h3>Expense List</h3>
 <hr />
 <ListGroup>
       {expense.map((item)=>(
         <ExpenseItem key ={item._id}  item={item}/>
       ))}
       </ListGroup>
        <AddForm />
      </div>
    );
  }
}
const mapStateToProps = ({expense}) => {
  return {
fetching:expense.fetching,
expense:expense.expense
  }
}
const Home = connect(mapStateToProps,{fetchExpense})(HomeComponent)
export { Home };
