import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faInstagram,faTwitter,faSnapchat,faPrinterest,faLinkedIn}   from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <>
    <div  className="Footer-css">
      <i style={{marginRight:"3px"}} className="fa fa-facebook-official"></i>
      <i style={{marginRight:"3px"}} className="fa fa-instagram"></i>
      <i style={{marginRight:"3px"}} className="fa fa-snapchat"></i>
      <i style={{marginRight:"3px"}} className="fa fa-pinterest-p"></i>
      <i style={{marginRight:"3px"}} className="fa fa-twitter"></i>
      <i style={{marginRight:"3px"}} className="fa fa-linkedin"></i>
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
