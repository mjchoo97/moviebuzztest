import React from 'react'
import  {Movie}  from '../movie/Movie'
import "./Featured.css"





export const Featured = () => {
  const Movies = [
    {
      name:"mario",
      score:"11.0"
    },
    {
      name:"shin",
      score:"7"
    },
    {
      name:"blade",
      score:"1.0"
    }
    
  ];

  return (
    <div className='featured'>
        <div className='featuredcontainer'>
            {Movies.map((movie,i) =>{
              console.log(movie.name);
               return <Movie index = {i} key={movie.name} props={movie}/>
            })}   
        </div>
    </div>
  )
}


