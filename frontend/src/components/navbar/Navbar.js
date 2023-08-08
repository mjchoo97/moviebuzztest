import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


export const Navbar = () => {
const {data,loading,error} = useFetch(`movie/getdistinctyear`)
const [open,setOpen] =useState(false)

console.log(data)
return (
    <div className = "navbar">
        <div className = "container">
            <Link to ="/" className='link'>
                <div className='logo'>
                    <div className='text'>
                        MovieBuzz.
                    </div>
            </div>
            </Link>
            <div className = "links">
                <Link to ="/addmovie" className='link'>
                 <div className='link-span'>New Movie</div>
                </Link>
                 <div className='link-span' onClick={()=>setOpen(!open)}>Category</div>
                 {open  &&
                 <div className="options">
                    {data.map((year)=>(
                        <Link to = {`/featured/${year}`} className='link'>
                            <span onClick={(open)=>setOpen(!open)}>{year}</span>
                        </Link>
                    ))}
                 </div>
                }
                 <div className='link-span' > About Us</div>
            </div>
        </div>
    </div>
)



   
}