import React from 'react'
import "./Movie.css"
import { Link } from 'react-router-dom'

export const Movie = ({props,index}) => {
  const {title,score,_id,MJ_score,PY_score} = props 
  return (
    <div className='movie'>
      <Link to = {`/movie/${_id}`} className='link'>
        <div className='moviecontainer'>
          <div className="movieleft">
            <div className='index'>
              <span>{index+1}</span>
            </div>
            <div className='moviename'>
            <span>{title}</span>
            </div>
          </div>
          <div className="movieright">
          <div className='score'>
            <span>{MJ_score.toFixed(1)}</span>    
            </div>
            <div className='score'>
            <span>{PY_score.toFixed(1)}</span>    
            </div>
            <div className='score'>
            <span>{score.toFixed(1)}</span>    
            </div>         
          </div>
        </div>
        </Link>
    </div>
  )
}
