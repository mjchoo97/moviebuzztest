import express from "express";
import {createMovie, getAllMovie, getDistinctYear, getMovieByID, getMovieByYear, getRandomMovie, updateMovie, updatedMovie} from "../controller/movie.js"

const router = express.Router();

router.post("/add",createMovie)
router.get("/getmoviebyyear",getMovieByYear)
router.put("/update",updateMovie)
router.get("/getdistinctyear",getDistinctYear)
router.get("/getmoviebyid",getMovieByID)
router.put("/updatemovie",updatedMovie)
router.get("/getrandommovie",getRandomMovie)
router.get("/getall",getAllMovie)

export default router