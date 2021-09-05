import React, { Component } from 'react';
import { connect } from "react-redux";
import { Formik } from 'formik';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,FormGroup,Label,FormFeedback} from 'reactstrap';

import moment from 'moment'; 
import * as Yup from 'yup';
import {saveExpense} from '../actions/expense_actions'
import {FloatButton} from '../components/FloatButton'
class AddFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false
        };
        this.toggle = this.toggle.bind(this)
        this.onSubmit = this._onSubmit.bind(this);
    }
toggle(){
    this.setState({
        modal:!this.setState.modal,
    })

}
componentDidUpdate(){
  const {saved} =this.props;
  const {modal} = this.state;
  if(saved && modal){
    this.toggle()
    this.bag.resetForm();
  }
}
_onSubmit(values,bag){
   this.props.saveExpense(values)
   this.bag=bag
}
    render() {
        const now = moment().format('YYYY-MM-DD')
        return (
          <div>
            <FloatButton onClick={this.toggle} />
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
              <ModalBody>
               <Formik
               initialValues={{amount:'',created:now}}
               onSubmit = {this._onSubmit.bind(this)}
               validationSchema={Yup.object().shape({
                amount: Yup.number().min(1).required(),
            
                created: Yup.date().required(),
              })}
               render = {({errors,touched,handleBlur,handleChange,values,handleSubmit,isValid,isSubmitting}) =>(
                   <div>
                       <FormGroup>
                       <label>Amount</label>
                       <Input
              invalid={errors.amount && touched.amount}
              name="amount"
              type="number"
              value={values.amount}
              placeholder="Enter Expesne Amount"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.amount && touched.amount && (
              <FormFeedback>{errors.amount}</FormFeedback>
            )}
            </FormGroup>
            <FormGroup>
                       <label>Date</label>
                       <Input
              invalid={errors.created && touched.createdt}
              name="created"
              type="date"
              value={values.created}
              placeholder="Enter Expesne Amount"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.created && touched.created && (
              <FormFeedback>{errors.created}</FormFeedback>
            )}
            </FormGroup>
            <Button color='primary' onClick={handleSubmit}  disabled = {!isValid||isSubmitting}>
              
Save Expense
            </Button>
          
                   </div>
        )}
               />
              </ModalBody>
            </Modal>
          </div>
        )
      }
}
const mapStateToProps = ({expense}) => {
  return {
    saved:expense.saved
  }
}
const AddForm = connect(mapStateToProps,{saveExpense})(AddFormComponent)
 
export { AddForm};