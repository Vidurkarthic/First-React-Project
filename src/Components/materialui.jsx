import React from "react";
import { Paper, TextField, Typography, Button, Stack } from "@mui/material";
import "./materialui.css";
import { Link } from "react-router-dom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Materialui = () => {
  return (
    <center>
      <div
        className="F"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
            backgroundColor: "rgba(240, 240, 240,0.7)",
          }}
        >
          <AccountCircleSharpIcon
            style={{ fontSize: "60px" }}
          ></AccountCircleSharpIcon>
          <br></br>
          <Typography variant="h5">Login</Typography>
          <form style={{ marginTop: 10}}>
            <Stack direction="column">
            <TextField label="Username" variant="outlined" required />
            <br></br>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
            />
            <br></br>
            
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            </Stack>
            
            <br></br>
          </form>
          <br></br>
          <Link to="/SignUp">New User?</Link>
        </Paper>
      </div>
    </center>
  );
};
export default Materialui;
