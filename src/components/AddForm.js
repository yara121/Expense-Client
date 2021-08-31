import React, { useState,useEffect,useRef } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,

  Input,
  FormGroup,
  Label,
  FormFeedback,
} from "reactstrap";
import { FloatButton } from "./FloatButton";
import { Formik } from "formik";
import moment from "moment";
import * as Yup from "yup";

import {saveExpense} from '../actions/expense_actions'

const AddFormComponent = (props) => {
  const { buttonLabel } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const {saved} = props;
  useEffect((values,actions) => {
    const {saved} = props;
    
    if(saved&& modal){
     toggle()
  // bag.resetForm();
    }
  });
  const onSubmit = (values,bag) => {
props.saveExpense(values)
//  let bag = useRef(bag);
  }

  const now = moment().format("YYYY-MM-DD");
  return (
    <div>
      <FloatButton onClick={toggle} />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Expense</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ amount: "", created: now }}
            onSubmit={onSubmit}
            validationSchema={Yup.object().shape({
              amount: Yup.number().min(1).required(),
              created: Yup.date().required(),
            })}
            render={({ errors, touched, handleBlur, handleChange, values, handleSubmit, isValid, isSubmitting,resetForm }) => (
              <div>
                <FormGroup>
                  <Label>Amount</Label>
                  <Input
                    invalid={errors.amount && touched.amount}
                    name="amount"
                    type="number"
                    value={values.amount}
                    placeholder="Enter Expense Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.amount && touched.amount && (
                    <FormFeedback>{errors.amount}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Date</Label>
                  <Input
                    invalid={errors.created && touched.created}
                    name="created"
                    type="date"
                    value={values.created}
                    placeholder="Enter Expense Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <FormFeedback>{errors.email}</FormFeedback>
                  )}
                </FormGroup>
                <Button color="primary" onClick={handleSubmit} 
            disabled={!isValid || isSubmitting}
            >
            Save Expense
          </Button>
              </div>
            )}
          />
        </ModalBody>
   
          
         
        
      </Modal>
    </div>
  );
};
const mapStateToProps = ({expense}) => {
  return {
    saved:expense.saved
  }
}
const AddForm = connect(mapStateToProps,{saveExpense})(AddFormComponent);
export { AddForm };
