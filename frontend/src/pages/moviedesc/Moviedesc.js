import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { axiosInstance } from '../../config'
import useCalculate from '../../hooks/useCalculate'
import "./Moviedesc.css"
import { Loading } from '../../components/loading/Loading'

const Moviedesc = () => {
    const params = useParams();
    const {data,loading,error} = useFetch(`movie/getMovieByID?id=${params._id}`)
    const {title, description,year,img,...others} = data;

    const score = useCalculate(others.MJ_score,others.PY_score);

    const navigate =useNavigate();
  return (
    <div className="moviedesc">
    {loading ? <Loading/> : <>
      <div className="moviedesccontainer">
        <div className="movieleft">
          {img ? <img src={img} alt="poster" />: <div className="noimage">
                      No Image
          </div>}
        </div>
        <div className="movieright">
          <div className="desctitle">{title}</div>
          <div className="descyear">{year}</div>
          <div className="descdesc">{description}</div>
          <div className="descscoresection">
            <div className="descscore">
              MJ
              <span>{others.MJ_score}</span>
            </div>
            <div className="descscore">
              PY
              <span>{others.PY_score}</span>
            </div>
            <div className="descscore">
                <span>  {score}</span>
            </div>
          </div>
          <button className='edit' onClick={()=>navigate(`/edit/${params._id}`)}>Edit</button>
        </div>
      </div>
          </>
        }
    </div>

  )
}

export default Moviedesc