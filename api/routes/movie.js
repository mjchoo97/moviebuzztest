import express from "express";
import {createMovie, getMovieByYear, updateMovie} from "../controller/movie.js"

const router = express.Router();

router.post("/add",createMovie)
router.get("/getmoviebyyear",getMovieByYear)
router.put("/update",updateMovie)

export default router