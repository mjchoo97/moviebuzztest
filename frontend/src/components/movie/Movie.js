import React from 'react'
import "./Movie.css"

export const Movie = ({props,index}) => {
  const {name,score} = props 
  return (
    <div className='movie'>
        <div className='moviecontainer'>
          <div className='index'>
            <span>{index+1}</span>
          </div>
          <div className='moviename'>
          <span>{name}</span>
          </div>
          <div className='score'>
          <span>{score}</span>    
          </div>         
        </div>
    </div>
  )
}
