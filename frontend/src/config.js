import axios from "axios"

export const axiosInstance = axios.create({
    
    // baseURL : "http://localhost:8800/api/"
    baseURL : "https://moviebuzz-api.onrender.com/api/"
})