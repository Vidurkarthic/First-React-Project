import React from "react";
import { Paper, TextField, Typography, Button, Stack } from "@mui/material";
import "./Registration.css";
import { Link } from "react-router-dom";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
const Registration = () => {
  return (
    <center>
      <div
        className="R"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={24}
          style={{
            width: 300,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SupervisedUserCircleIcon
            style={{ fontSize: "60px" }}
          ></SupervisedUserCircleIcon>
          <Typography variant="h5">Sign Up/Register</Typography>
          <form style={{ marginTop: 10 }}>
            <Stack direction="column">
              <TextField label="First Name" variant="outlined" required />
              <br></br>
              <TextField label="Last Name" variant="outlined" required />
              <br></br>
              <TextField label="Username" variant="outlined" required />
              <br></br>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              <br></br>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              <br></br>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                required
              />
              <br></br>
              <Link to="/">
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Link>
              <br></br>
            </Stack>
          </form>
          <br></br>
          <Link to="/Login">Already a Customer.</Link>
          <br></br>
          
        </Paper>
      </div>
    </center>
  );
};
export default Registration;
