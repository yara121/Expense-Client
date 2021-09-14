import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Formik } from 'formik';
import {Modal,ModalHeader,ModalBody} from 'reactstrap';
import moment from 'moment';
import * as Yup from 'yup';

import {saveExpense,resetSaved,fetchExpense} from '../actions/expense_actions'
import { FloatButton } from './FloatButton';
import { FormBody } from '.';

class AddFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false
        };
        this.toggle = this.toggle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        })
    }
    componentDidUpdate(){
    const {saved,error,resetSaved,fetchExpense} = this.props;
    const {modal} = this.state;

    if(error){
      this.bag.setSubmitting(false);
    }
    if(saved && modal ){
      resetSaved();
      fetchExpense();
      this.toggle();
      this.bag.resetForm();
    }
    }
    onSubmit(values,bag){
      this.props.saveExpense(values)
      this.bag=bag;
    }

    render() { 
       
        return (
            <div>
           <FloatButton onClick={this.toggle} />
              <Modal isOpen={this.state.modal} >
                <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
                <ModalBody>
                  <FormBody onSubmit={this.onSubmit}/>
                   
               
                </ModalBody>
         
              </Modal>
            </div>
        )
    }
        
}
const mapStateToProps =({expense,errors}) =>{
  return {
    saved: expense.saved,
    error:errors.message
  }
}
const AddForm = connect(mapStateToProps,{saveExpense,resetSaved,fetchExpense})(AddFormComponent);
export {AddForm};