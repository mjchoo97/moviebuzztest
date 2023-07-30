import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    year:{
        type:Number,
        required:true,
    },
    MJ_score:{
        type: Number,
    },
    PY_score:{
        type: Number
    }
})


export default mongoose.model("Movie",movieSchema)