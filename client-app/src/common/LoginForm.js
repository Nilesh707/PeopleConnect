import React, { useState } from "react";
import { isAuthenticated, authenticate, signin } from "../auth/helper";

import { Container, Form, Button, Col } from "react-bootstrap";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "nileshsinha777@gmail.com",
    password: "nilesh",
    error: "",
    loading: false,
    success:false,
    didRedirect: false, //if sign in then redirect to somewhere
  });
  console.log("");
  const { email, password, error, loading, success } = values;
  const { user } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>loading....</h2>
        </div>
      )
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
  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, success: true });
           
          });
        }
      })
      .catch(console.log("Sign In Request Failed"));
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created Successfully. Please Close the Window and Submit the UpdateDetail Form
            
          </div>
        </div>
      </div>
    );
  };

  //   const performRedirect = () => {
  //     if (didRedirect) {
  //       if (user && user.role === 1) {
  //         return <Redirect to="/admin/dashboard" />;
  //       } else {
  //         return <Redirect to="/user/dashboard" />;
  //       }
  //     }
  //     if (isAuthenticated()) {
  //       return <Redirect to="/" />;
  //     }
  //   };

  const signInForm = () => {
    return (
      <Form>
        <Form.Group controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email}
                onChange={handleChange("email")} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password}
                onChange={handleChange("password")} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}  type="submit">
          Submit
        </Button>
      </Form>
    );
  };
  return (
    <div>
        {successMessage()}
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
    </div>
  );
};

export default LoginForm;
