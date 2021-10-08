import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnchor}  from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <div className="Main-css">
        <h1>START PAGE</h1>
        <h6>Template by Huzmaan</h6>
        <button className="btn-css">GET STARTED</button>
      </div>
      <div className="lorem-css">
          <div className="textcss">
        <h3>Lorem Ipsum</h3>
        {/* <i class="fas fa-anchor"></i>{" "} */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
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
    </>
  );
};

export default Main;
