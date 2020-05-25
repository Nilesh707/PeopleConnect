import React, { useState } from "react";
import { signup } from "../auth/helper";
import { Link } from "react-router-dom";
import { Button, Alert, Form } from "react-bootstrap";
const SignUpForm = () => {
  const [show, setShow] = useState(true);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    error: "",
    success: false,
    passwordError: false,
  });
  const {
    firstname,
    lastname,
    email,
    password,
    error,
    success,
    confirmpassword,
    passwordError,
  } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const PasswordAlert = () => {
   
      if (passwordError && show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Data Mis-Match</Alert.Heading>
            <p>Your Confirm Password and Password are not Same!!.</p>
          </Alert>
        );
      }
     else {
      return null;
    }
  };
  const onSignUp = (e) => {
    e.preventDefault();

    if (confirmpassword !== password) {
      setValues({ ...values, passwordError: true });
    } else {
        console.log("aya")
      signup({ firstname, email, password }).then((data) => {
        if (data.err) {
          console.log(data.err);
          setValues({
            ...values,
            error: data.err,
            success: false,
          });
        } else {
            console.log(data)
          setValues({
            ...values,
            firstname: "",
            lastname: "",
            email: "",
            confirmpassword: "",
            password: "",
            error: "",
            success: true,
          });
        }
      });
    }
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created Successfully. Please Login Now.
           
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      <PasswordAlert />
      {errorMessage()}
      <Form>
        <Form.Group controlId="1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstname}
            onChange={handleChange("firstname")}
            placeholder="Enter First Name"
          />

          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastname}
            onChange={handleChange("lastname")}
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group controlId="2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChange("password")}
            placeholder="Password"
          />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmpassword}
            onChange={handleChange("confirmpassword")}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => onSignUp(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
