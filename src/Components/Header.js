import React from "react";

const Header = () => {
  function navbar() {
    var x = document.getElementsByClassName("topnav");
    console.log(x.className)
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div className="header-css">
        {/* <div className="topnav" id="myTopnav">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#Link1">Link1</a>
          <a href="#Link2">Link2</a>
          <a href="#Link3">Link3</a>
          <a href="#Link4">Link4</a>  
          <a href="javascript:void(0);"  className="icon" onClick={navbar}>
            &#9776;
          </a>  
        </div> */}
        <div className="Main-css">
          <h1 className="start-css">START PAGE</h1>
          <h6>Template by Huzmaan</h6>
          <button className="btn-css">GET STARTED</button>
        </div>
      </div>
    </>
  );
};

export default Header;
