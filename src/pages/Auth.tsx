import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
  const {firstName, lastName, email,password, confirmPassword} = formValue;

  return (
    <section>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{ p: 2, marginTop: "10vh", width: "100%", textAlign: "center" }}
        >
          <CardContent>

            <Typography
              sx={{ fontSize: 20, fontStyle:"bold" }}
              color="text.secondary"
              gutterBottom
            >
              {!showRegister ? "Login" : "Register"}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {!showRegister ? "Please enter your Email & Password" : "Please enter User Deatils"}
            </Typography>
  


          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small"> {!showRegister ? "Login" : "Register"}Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </section>
  );
};

export default Auth;
