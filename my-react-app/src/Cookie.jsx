import { useState } from "react";
import cookieImg from "./assets/cookie.png";
import "./Cookie.css";

function Cookie(props) {
  
  return (
    <>
      <div id="cookie">
        <img src={cookieImg} className="cookie" alt="Cookie" />
      </div>
    </>
  );
}

export default Cookie;
