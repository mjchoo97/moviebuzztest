import React from 'react'
import "./Movie.css"

export const Movie = ({props,index}) => {
  const {title,score} = props 
  return (
    <div className='movie'>
        <div className='moviecontainer'>
          <div className='index'>
            <span>{index+1}</span>
          </div>
          <div className='moviename'>
          <span>{title}</span>
          </div>
          <div className='score'>
          <span>{score.toFixed(1)}</span>    
          </div>         
        </div>
    </div>
  )
}
