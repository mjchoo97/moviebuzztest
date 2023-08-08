import { useEffect, useState } from "react"
import { axiosInstance } from "../config";
import axios from "axios";



const useFetch = (url) =>{
    const [data, setData] =useState([])
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axiosInstance.get(url);
                setData(res.data);
            } catch (err){
                setError(err);
                console.log(err)
            }
            setLoading(false)
        };
        fetchData();
        },[url]);

    return {data,loading,error}
};

export default useFetch;