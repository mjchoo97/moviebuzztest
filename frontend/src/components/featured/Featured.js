import React from 'react'
import  {Movie}  from '../movie/Movie'
import "./Featured.css"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import {Loading} from '../loading/Loading'

export const Featured = () => {
  const params =useParams();
  const yearSelected = params.year
  const {data,loading,error} = useFetch(`movie/getmoviebyyear?year=${yearSelected}`)

  console.log(data)

  const Movies = data.map((obj,i) => {
    const mj_score = obj.MJ_score || 0;
    const py_score = obj.PY_score || 0;
    const score = (mj_score+py_score)/(mj_score && py_score ? 2 :1);
    return {...obj, score:score};
  })

  Movies.sort((a,b) => b.score - a.score )
  console.log(Movies.length)
  

  // const Movies = [
  //   {"title": "xnan",
  //     "description": "lol",
  //     "year": 2023,
  //     "score": 6  
  //   }
  // ]

  return (
      <div className='featured'>
      {loading ? <Loading/>:(<>
        <div className='featuredcontainer'>
          <div className="yearheader">
            <span>{yearSelected}</span>
          </div>
          <div className="rankingsection">
            <div className="rankleft">
              <div className="rank">1</div>
              {Movies[0]&& 
                <div className="first">
                  {Movies[0].img ? 
                  <img src={Movies[0].img} alt="poster" />: 
                    <div className="noimage">
                      No Image
                    </div>
                  }
                <div className="rankdesc">
                  <div className="rankingtitle">
                    {Movies[0].title}
                  </div>
                  <div className="rankingscore">
                    {Movies[0].score.toFixed(1)}
                  </div>
                </div>
              </div>
                }
              {Movies.length > 1 && <>
                <div className="rank">2</div>
                  <div className="first">
                    {Movies[1].img ? 
                    <img src={Movies[1].img} alt="logo" />: 
                    <div className="noimage">
                        No Image
                      </div>
                    }
                  <div className="rankdesc">
                    <div className="rankingtitle">
                      {Movies[1].title}
                    </div>
                    <div className="rankingscore">
                      {Movies[1].score.toFixed(1)}
                    </div>
                  </div>
                </div>
              </>
                }
            </div>
              {Movies.length > 2 && 
              <div className="rankright">
                <div className="rank">{Movies.length}</div>         
                    <div className="first">
                      {Movies[Movies.length-1].img ? 
                      <img src={Movies[Movies.length-1].img} alt="logo" />: 
                        <div className="noimage">
                          No Image
                        </div>
                      }
                    <div className="rankdesc">
                      <div className="rankingtitle">
                        {Movies[Movies.length-1].title}
                      </div>
                      <div className="rankingscore">
                        {Movies[Movies.length-1].score.toFixed(1)}
                      </div>
                    </div>
                  </div>
              </div>
            }
            </div>
          <div className="ranking">
          {Movies.map((movie,i) =>{                       
            return <Movie index = {i} key={movie.name} props={movie}/>
          })}   
          </div>
        </div>
        </>) 
        }
      </div>
      )

}



