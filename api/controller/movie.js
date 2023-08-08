import {createError} from "../Ultilities/Error.js"
import Movie from "../models/Movies.js"
import mongoose from "mongoose";


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

//GET movie by ID
export const getMovieByID = async (req,res,next) =>{
    const id = req.query.id;
    try{
        const MovieDetail = await Movie.findById(id)
        res.status(200).json(MovieDetail)
    }catch(err){
        next(err);
    }
}

//GET DISTINCT YEAR
export const getDistinctYear = async (req,res,next) =>{
    try{
        const distinctYear= await Movie.distinct('year');
        res.status(200).json(distinctYear)
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


//PUT
export const updatedMovie = async (req,res,next) =>{
    const updatedMovie = new Movie(req.body);
    try{
        const updateMovie = await Movie.findByIdAndUpdate(updatedMovie.id,updatedMovie)
        res.status(200).json(updateMovie)
    }catch(err){
        next(err);
    }
}

//Random 
export const getRandomMovie= async (req,res,next) =>{
    try{
        const totalCount = await Movie.count();
        var random = Math.floor(Math.random() * (totalCount-3))
        const randMovie = await Movie.find().skip(random).limit(3)
        res.status(200).json(randMovie)
    }catch(err){
        next(err);
    }
}


export const getAllMovie= async (req,res,next) =>{
    try{
        const allMovie = await Movie.find()
        res.status(200).json(allMovie)
    }catch(err){
        next(err);
    }
}



