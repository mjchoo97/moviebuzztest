import {createError} from "../Ultilities/Error.js"
import Movie from "../models/Movies.js"


//CREATE
export const createMovie = async (req,res,next) =>{
    const newMovie = new Movie(req.body);
    try{
        const saveMovie = await newMovie.save()
        res.status(200).json(saveMovie)
    }catch(err){
        next(err);
    }
}

//GET movie by year
export const getMovieByYear = async (req,res,next) =>{
    const selectedYear = req.query.year;
    try{
        const YearMovie = await Movie.find({year: selectedYear });
        res.status(200).json(YearMovie)
    }catch(err){
        next(err);
    }
}

//Update Movie Field
export const updateMovie = async (req,res,next) =>{
    const {title,description,value} = req.query;
    try{
        const updatedMovie = await Movie.updateMany({title:title}, {[description]:value})
        res.status(200).json(updatedMovie)
    }catch(err){
        next(err);
    }
}
