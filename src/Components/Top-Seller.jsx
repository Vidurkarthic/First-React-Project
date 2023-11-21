import React from "react";
import "./Top-Seller.css";
import { Typography, Paper } from "@mui/material";
import hotwheels from "./hotwheels.png";
import mattel from "./mattel.png";
import lego from "./lego.png";
import nerf from "./nerf.png";

const Seller = () => {
  return (
    <div>
      <div className="box">
        <div className="dealers">
          <Typography
            variant="h3"
            color={"black"}
            textAlign={"center"}
            fontSize={70}
          >
            {" "}
            Our Dealers
          </Typography>
        </div>
        <div className="tablerow">
          <table className="custom-table">
            <tbody>
              <tr>
                <td className="tabledata">
                  <img
                    className="img"
                    src={hotwheels}
                    alt="Hot Wheels"
                    style={{ maxWidth: "100%", height: "190px" }}
                  />
                </td>
                <td className="tabledata">
                  <Paper elevation={3} className="img-paper">
                    <img
                      className="img"
                      src={mattel}
                      alt="Mattel"
                      style={{ maxWidth: "100%", height: "190px" }}
                    />
                  </Paper>
                </td>
                <td className="tabledata">
                  <img
                    className="img"
                    src={lego}
                    alt="LEGO"
                    style={{ maxWidth: "100%", height: "190px" }}
                  />
                </td>
                <td className="tabledata">
                  <img
                    className="img"
                    src={nerf}
                    alt="Nerf"
                    style={{ maxWidth: "100%", height: "190px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seller;
