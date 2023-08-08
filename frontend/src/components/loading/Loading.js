import React from 'react'
import "./Loading.css"

export const Loading = () => {
  return (
    <div className="loadingmain">
        <div className="loadingcontainter">

            <div className="imgskeleton skeleton"> </div>           
             <div className="imgskeleton skeleton">
            </div>
            <div className="imgskeleton skeleton">
            </div>
        </div>
        <div className="textskeleton skeleton"></div>
        <div className="textskeleton skeleton"></div>
        <div className="textskeleton skeleton"></div>
    </div>
  )
}

