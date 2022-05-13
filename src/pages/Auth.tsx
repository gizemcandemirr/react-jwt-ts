import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const handleChange = () => {};

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
                  <Col md="12">
                    <Form.Group className="mb-4 mt-4">
                        <Row>
                            <Col md="3"><Form.Label>Email :</Form.Label></Col>
                            <Col>  <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                         </Col> 
                        </Row>
                    </Form.Group>
                      
                   
                  </Col>
                  <Col md="12">
                    <Form.Group as={Col}>

                    <Row>
                        <Col md="3"><Form.Label>Password :</Form.Label></Col>
                        <Col><Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      /> </Col>
                    
                    </Row>
                      
                      

                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button>Learn More</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Auth;
