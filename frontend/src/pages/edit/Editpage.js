import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form';
import "./Editpage.css"
import { axiosInstance } from '../../config';
import { useNavigate, useParams} from 'react-router-dom';
import upload from '../../utils/upload';
import useFetch from '../../hooks/useFetch';
import { Loading } from '../../components/loading/Loading';



function EditMoviePage() {
  const navigate =useNavigate();
  const params = useParams();
  const [file,setFile] = useState(null);
    const [values,setValues] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axiosInstance.get(`movie/getMovieByID?id=${params._id}`);
                setValues(res.data);
            } catch (err){
                console.log(err)
            }
        };
        fetchData();
        },[params]);

    const[loading,setLoading] = useState(false)
  const inputs =[
    {
      id:1,
      name:"title",
      type:"text",
      placeholder:"Title",
      label:"Movie Title"
    },
    {
      id:2,
      name:"description",
      type:"text",
      placeholder:"Description",
      label:"Description"
    },
    {
      id:3,
      name:"year",
      type:"text",
      placeholder:"Year",
      label:"Year"
    },
    {
      id:4,
      name:"MJ_score",
      type:"text",
      placeholder:"MJ Score",
      label:"MJ Score"
    },
    {
      id:5,
      name:"PY_score",
      type:"text",
      placeholder:"PY Score",
      label:"PY Score"
    }
  ]

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        let url;
        setLoading(true)
        if(file){
             url  = await upload(file)
            console.log(url)
            await axiosInstance.put("movie/updatemovie",{...values,img:url});
        }else{
            await axiosInstance.put("movie/updatemovie",{...values});
        }
        setLoading(false)
      navigate(`/featured/${values.year}`);
    }
    catch(err){
      console.log(err);
    }
  }

  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values)

  return (
    <div className="moviepage">
    {!values || loading ? <Loading/>:<>
      <div className="moviepagecontainer">
        <form className ="formclass" onSubmit = {handleSubmit}>
          {inputs.map((input)=>(
            <Form key={input.id} {...input} value={values[input.name]} onChange ={onChange}/>
            ))}
        <div className="formInput">
            <label>Poster</label>
            <input type = "file" onChange={(e) =>setFile(e.target.files[0])}/>
        </div>      
        <button>Submit</button>
        </form>
      </div>
      </>}
    </div>
  )
}

export default EditMoviePage