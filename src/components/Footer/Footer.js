import React from "react";
import "./style.css";
import CallIcon from '@material-ui/icons/Call';

function Footer() {
  return (
    <>
      <footer id="footer" id="contact">
        <div className="footerTop px-1 px-sm-3 py-3 text-center">
          <p className="mb-0 d-flex text-light align-items-center justify-content-around">
            <div className="address  d-flex align-items-center mb-2 mb-xl-0 ">
              <i className="fa fa-map-marker mb-2 mb-md-0"></i>
              17 Prince St, Gardens 8001, Cape Town, South Africa
            </div>
           
          </p>
        </div>
        <div className="footerMiddle px-1 px-sm-4 py-3 row mx-0">
          <a  className="col-sm-12  col-md-6 col-xl-3 text-sm-left text-md-center">
            Privacy Policy
          </a>{" "}
          <a  className="col-sm-12  col-md-6 col-xl-3 text-sm-left text-md-center">
            Terms & Conditions
          </a>{" "}
          <a className="col-sm-12  col-md-6 col-xl-3 text-sm-left text-md-center">
            Portfolio Site
          </a>
          <p className="col-sm-12  col-md-6 col-xl-3 text-sm-left text-md-center mb-0 ">
             <CallIcon /> <span>+27 (0) 21 461 43 61</span>
          </p>
        </div>
        <div className="footerBottom  ">
          <p className="text-center  text-light mb-1">
            © Copyright <h6 className="d-inline">Nowhere Else Productions</h6>. All Rights Reserved
          </p>
          <p className="text-center  text-light mb-0 ">
            Designed by{" "}
            <span style={{ color: "var(--text-color)" }} className="cursor-pointer">
              Nikhil Gupta
            </span>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;