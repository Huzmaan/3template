import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faInstagram,faTwitter,faSnapchat,faPrinterest,faLinkedIn}   from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <>
    <div className="Footer-css">
      <i className="fa fa-facebook-official"></i>
      <i className="fa fa-instagram"></i>
      <i className="fa fa-snapchat"></i>
      <i className="fa fa-pinterest-p"></i>
      <i className="fa fa-twitter"></i>
      <i className="fa fa-linkedin"></i>
    </div>
    <div className="footer-css">
        <p>
            Powered by
             <a style={{color: 'gray'}} href="https://www.w3schools.com/w3css/default.asp" >Huzmaan </a>
        </p>
    </div>

</>    
  );
};

export default Footer;
