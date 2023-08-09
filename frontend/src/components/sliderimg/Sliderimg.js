import React, { useEffect, useState } from 'react'
import "./Sliderimg.css"
import { Link } from 'react-router-dom';

const Sliderimg = ({props}) => {

    const [index,setIndex] = useState(1);
    const [counter, setCounter] = useState(0);
    // const [translate,setTranslate] = useState(-700)
    const Movies = props.map((obj,i) => {
        const mj_score = obj.MJ_score || 0;
        const py_score = obj.PY_score || 0;
        const score = (mj_score+py_score)/(mj_score && py_score ? 2 :1);
        return {...obj, score:score};
      })

    const handleClick = (prev)=>{
        setIndex((prev) => prev === 1 ? -2 :prev + 1)
        console.log(index)
        console.log(translate)
    }


    
    useEffect(() => {
        const interval = setInterval(() => {
          handleClick();
        }, 10000);
        
        return () => clearInterval(interval);
      }, []);

    let translate
    function myFunction(x) {
        if (x.matches) { // If media query matches
            translate = -380
        } else {
            translate = -730
        }
      }

  

      var x = window.matchMedia("(max-width: 480px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) 

      
  return (
            <div className='featuredimgcontainer'>
                <div className="wrapper" >
                    <div className="wrapperimg" style ={{transform:`translateX(${translate*index}px)`}}>
                    {Movies.map((movie,i)=> (
                    <div className="someclass">
                    <div className ='featuredimage'>
                    <Link to = {`/movie/${Movies[i]._id}`}  className='link'>
                        <img src={Movies[i].img} alt="poster" />
                    </Link> 
                    </div>
                    <div className='descriptionbox'>
                        <div className='top'>
                            <div className="up">
                                <div className='title'>
                                {Movies[i].title}
                                </div>
                                <div className={Movies[i].score.toFixed(1) > 7 ? 'score': 'lowscore'}>
                                    <div className= 'scoretext'>
                                {Movies[i].score.toFixed(1)}
                                    </div>
                                 </div> 
                            </div>
                            <div className='year'>
                            {Movies[i].year}
                            </div> 
                        </div>
                        <div className ='bottom'>
                            <div className='description'>
                            {Movies[i].description}
                            </div>
                            <button onClick = {handleClick}>NEXT</button>           
                        </div>
                    </div>              
                    </div>
           
                    ))}
                         </div>
                </div>         
            </div>
  )
}

export default Sliderimg