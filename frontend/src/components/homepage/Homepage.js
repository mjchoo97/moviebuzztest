import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { Loading } from '../../components/loading/Loading';
import Sliderimg from '../sliderimg/Sliderimg';
import { axiosInstance } from '../../config';

const Homepage = () => {
    const {data} = useFetch(`movie/getall`)
    const [loading, setLoading] =useState(true)
    const [imgMovie,setimgMovie] = useState()
    const [yearSelection,setyearSelection] = useState()


    useEffect(()=>{
        const fetchData = async ()=>{
            try{            
                if(data.length > 0){
                    const movieWithImage = [...data].filter((movie)=> { return movie.hasOwnProperty('img')})
                    console.log(movieWithImage)
                    const distinctYear = [...new Set(data.map(item => item.year))];
                    setyearSelection(distinctYear )
                    setimgMovie([...movieWithImage].sort(() => 0.5 - Math.random()).slice(0,3))
                    console.log(yearSelection)
                    setLoading(false)
                }  
            } catch (err){
                console.log(err)
            }
        };
        fetchData();
      
        },[data]);



  return (

        <div className ="home">
            {loading? <Loading/>:
            <>
            <div className='container'>         
               <Sliderimg props = {imgMovie}/>
                <div className='welcome'>
                    <div className='text'>
                    Enjoying the movie 
                    </div>
                    <div className ='zzz'>
                        zzzz
                    </div>            
                </div>            
                <div className='category'>
                    <div className="categorycontainer">
                        {yearSelection.map((year)=>(
                            <Link to = {`/featured/${year}`} className='link'>
                                <div key = {year} className="yearcat">{year}</div>
                            </Link>    
                        ))}
                    </div>                    
                </div>
            </div>
            </>
            }
        </div>    
  )
}

export default Homepage