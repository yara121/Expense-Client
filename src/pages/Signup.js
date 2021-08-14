import React, { Component } from "react";
import { Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

class Signup extends Component {
  _handleFormSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h3>Create New Accout</h3>
        <hr />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this._handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched,
          }) => (
            <div>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  invalid={errors.name && touched.name}
                  name="name"
                  type="string"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.name && touched.name && (
                  <FormFeedback>{errors.name}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  invalid={errors.email && touched.email}
                  name="email"
                  type="email"
                  plaeholder="someone@someone.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.email && touched.email ? (
                  <FormFeedback>{errors.email}</FormFeedback>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  invalid={errors.password && touched.password}
                  name="password"
                  type="password"
                  placeholder="Your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormFeedback>{errors.password}</FormFeedback>
                ) : null}
              </FormGroup>
              <Button
                color="primary"
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                Sign Up
              </Button>
            </div>
          )}
        />
        <Link to="/login">Have an account? Sign In</Link>
      </div>
    );
  }
}

export { Signup };
