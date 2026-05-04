import { useState } from "react";
import cookieImg from "./assets/cookie.png";
import { renderToString } from 'react-dom/server';
import "./Pointer.css";

function Pointer(props) {
    const pointers = [];
          for(let i = 0; i < props.clickerCount; i++){
            pointers.push(<div class="pointer"><img src={cookieImg} className="smallCookie" alt="Small Cookie" width="50" height="50"/></div>);
          }
  return (<>{pointers}</>);
}

export default Pointer;