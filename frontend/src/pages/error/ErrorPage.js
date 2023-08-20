import React from 'react'
import "./ErrorPage.css"
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

const navigate = useNavigate();
  return (
    <div className="errormain">
        <div className="errorcontainer">
            <div className="upperimg">
                <img src='/error.png'/>
            </div>
            <div className="botdesc">
                <div className="errtitle">
                    404
                </div>
                <div className="errdesc">
                    The page you are looking for do not exist...
                </div>
 
                <button onClick={() =>navigate("/")}>Back to Home</button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage