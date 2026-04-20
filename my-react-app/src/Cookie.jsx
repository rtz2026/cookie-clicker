import { useState } from 'react'
import cookieImg from './assets/cookie.png'

function Cookie() {

  return (
    <>
        <div id="cookie">
            <img src={cookieImg} className="cookie" alt="Cookie" />
        </div>
    </>
  )
}

export default Cookie