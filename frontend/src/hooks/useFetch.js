import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URL =  "https://moviebuzz-api.onrender.com/api/";

const useFetch = (url) =>{
    const [data, setData] =useState([])
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axios.get(BASE_URL +url);
                setData(res.data);
            } catch (err){
                setError(err);
            }
            setLoading(false)
        };
        fetchData();
        },[url]);

    return {data,loading,error}
};

export default useFetch;