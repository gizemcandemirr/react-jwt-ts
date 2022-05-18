import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/authSlice";
import {useLoginUserMutation} from "../services/authApi"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const { firstName, lastName, email, password, confirmPassword } = formValue;
  const [loginUser, {data: loginData,isSuccess: isLoginSuccess, isError: isError, error: loginError}]= useLoginUserMutation();
  const dispatch=useAppDispatch();

  const navigate =useNavigate();

  const handleChange = (e:any) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  };
  const handleLogin= async ()=>{
      if(email && password){
         await loginUser({email,password})
      }else {
        toast.error("please fill all Input field")
      }
  }
  useEffect(()=>{
    if(isLoginSuccess){
      toast.success("User Login Successfully");
      dispatch(setUser({name: loginData.result.name, token: loginData.token }))
      navigate("/dashboard")
    }
  },[isLoginSuccess])

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Row>
            <Col md="12">
              <h2>{!showRegister ? "Login" : "Register"}</h2>

              <h6>
                {!showRegister
                  ? "Please enter your Email & Password"
                  : "Please enter User Deatils"}{" "}
              </h6>
            </Col>
            <Col>
              <Form>
                <Row>
                  {showRegister && (
                    <>
                      <Col md="12">
                        <Form.Group className="mb-4 mt-4">
                          <Row>
                            <Col md="3">
                              <Form.Label>First Name :</Form.Label>
                            </Col>
                            <Col>
                              {" "}
                              <Form.Control
                                type="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>
                      <Col md="12">
                        <Form.Group className=" mt-4">
                          <Row>
                            <Col md="3">
                              <Form.Label>Last Name :</Form.Label>
                            </Col>
                            <Col>
                              {" "}
                              <Form.Control
                                type="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>
                    </>
                  )}

                  <Col md="12">
                    <Form.Group className=" mt-4">
                      <Row>
                        <Col md="3">
                          <Form.Label>Email :</Form.Label>
                        </Col>
                        <Col>
                          {" "}
                          <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col md="12" className=" mt-4">
                    <Form.Group>
                      <Row>
                        <Col md="3">
                          <Form.Label>Password :</Form.Label>
                        </Col>
                        <Col>
                          <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>

                  {showRegister && (
                    <Col md="12" className="mt-4">
                      <Form.Group as={Col}>
                        <Row>
                          <Col md="3">
                            <Form.Label>Confirm Password :</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              type="password"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={handleChange}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  )}

                  <Col md="12" className="mt-5">
                    {!showRegister ? (
                      <Button onClick={()=> handleLogin()}>Login</Button>
                    ) : (
                      <Button>Register</Button>
                    )}
                  </Col>

                  <Col md="12">
                    {!showRegister ? (
                      <>
                        Don't have an account?
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(true)}
                        >
                          Signup
                        </p>
                      </>
                    ) : (
                      <div>
                        <span> Already have an acount ? </span>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(false)}
                        >
                          Sign In
                        </p>
                      </div>
                    )}
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Auth;
