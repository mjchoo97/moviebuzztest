import React, { useState } from 'react'
import Form from '../../components/form/Form';
import "./AddMoviePage.css"
import { axiosInstance } from '../../config';
import { useNavigate} from 'react-router-dom';
import upload from '../../utils/upload';
import { Loading } from '../../components/loading/Loading';



function AddMoviePage() {
  const navigate =useNavigate();
  const [file,setFile] = useState(null);
  const [loading,setLoading] = useState(false);
  const [values,setValues] = useState({
    title:"",
    description:"",
    year:"",
    MJ_score:"",
    Py_score:""
  })

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
            await axiosInstance.post("movie/add",{...values,img:url});
        }else{
            await axiosInstance.post("movie/add",{...values});
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
      {loading ? <Loading/>:<>
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

export default AddMoviePage