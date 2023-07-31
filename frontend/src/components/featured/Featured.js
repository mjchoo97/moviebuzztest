import React from 'react'
import  {Movie}  from '../movie/Movie'
import "./Featured.css"
import useFetch from '../../hooks/useFetch'





export const Featured = () => {
  const {data,loading,error} = useFetch("movie/getmoviebyyear?year=2023")


  const Movies = data.map((obj) => {
    const mj_score = obj.MJ_score || 0;
    const py_score = obj.PY_score || 0;
    const score = (mj_score+py_score)/(mj_score && py_score ? 2 :1);
    return {...obj, score: score};
  })

  Movies.sort((a,b) => b.score - a.score )
  console.log(Movies)

  return (
    <div className='featured'>
        <div className='featuredcontainer'>
            {Movies.map((movie,i) =>{           
               return <Movie index = {i} key={movie.name} props={movie}/>
            })}   
        </div>
    </div>
  )
}


