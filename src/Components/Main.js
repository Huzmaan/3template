import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnchor, faCoffee}  from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      
      <div className="lorem-css">
          <div className="textcss">
        <h1 className="lorem-title">Lorem Ipsum</h1>
        <h4 className="lorem-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h4> 
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        </div>
        <FontAwesomeIcon  className="icon-css" icon={faAnchor}/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="Sec-lorem-css">
      <div className="Second-lorem-css" >
        <FontAwesomeIcon  className="Second-icon-css" icon={faCoffee}/>
          <div className="textcss">
        <h1 className="lorem-title">Lorem Ipsum</h1>
        <h4 className="lorem-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h4> 
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        </div>
      </div>
      </div>
      <div className="container">
        <p>Quote of the day: live life</p>
      </div>
    </>
  );
};

export default Main;
