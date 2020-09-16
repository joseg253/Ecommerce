import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Grid container direction="row" justify="center">
        <div className="footer__row">
          <Grid item xs={4} className="col">
            <h4 className="title">Electronics Inc</h4>
            <ul className="list">
              <li>253-800-5685</li>
              <li>Seattle, Washington</li>
              <li>1504 East Perry Lane</li>
            </ul>
          </Grid>

          <Grid item xs={4} className="col">
            <h4 className="title">Support & Services</h4>
            <ul className="list">
              <li>Customer Service</li>
              <li>Protection Plancs</li>
              <li>Recalls</li>
            </ul>
          </Grid>

          <Grid item xs={4} className="col">
            <h4 className="title">Partnerships</h4>
            <ul className="list">
              <li>Affiliate Program</li>
              <li>Developers</li>
              <li>Advertise with us</li>
            </ul>
          </Grid>
        </div>
      </Grid>
      <div>
        <hr style={{ width: "35%" }} />
        <p style={{ fontSize: "small", paddingTop: "10px" }}>
          &copy;{new Date().getFullYear()} Electronics Inc | All Rights Reserved
          | Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
