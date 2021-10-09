import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faInstagram,faTwitter,faSnapchat,faPrinterest,faLinkedIn}   from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <>
    <div className="Footer-css">
      <i class="fa fa-facebook-official"></i>
      <i class="fa fa-instagram"></i>
      <i class="fa fa-snapchat"></i>
      <i class="fa fa-pinterest-p"></i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-linkedin"></i>
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
