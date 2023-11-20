import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

export default function MenuApBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      elevation={12}
      className="Box"
      position="static"
      style={{
        backgroundColor: "transparent",
        color: "black",
        
      }}
    >
      <Toolbar>
        <Typography
          sx={{ flexGrow: 0, paddingLeft: "30px", marginBottom: "5px" }}
        >
          <Link to="/">
            <Button color="primary" variant="text">
              Home
            </Button>
          </Link>
        </Typography>
        <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
          <Link to="/About">
            <Button color="primary" variant="text">
              About
            </Button>
          </Link>
        </Typography>
        <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
            <Button color="primary" variant="text">
              Products
            </Button>
            </Typography>
            <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
            <Button color="primary" variant="text">
              Services
            </Button>
        </Typography>
            <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
            <Button color="primary" variant="text">
              Others
            </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
