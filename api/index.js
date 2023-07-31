import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoute from "./routes/movie.js";
import cors from 'cors';


const app = express();
app.use(cors());
mongoose.set("strictQuery", false);

dotenv.config();
const port = process.env.PORT ||5000



//Connect to MongoDB
const connectDB = async ()=>{
    try {        
        await mongoose.connect(process.env.MONGODB_URL),{dbName: 'moviebuzz'};
        console.log("Connected to MongoDB")        
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB Disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("MongoDB Connected");
})


//Middlewares
app.use(express.json());
app.use("/api/movie",movieRoute)

app.use((err,req,res,next) =>{
	const errorStatus = err.status || 500
	const errorMessage = err.message || "Something wrong"
	return res.status(errorStatus).json({
		success:false,
		status: errorStatus,
		message: errorMessage
    }	
	)
})
    

app.listen(port, ()=> {
    connectDB();
    console.log(mongoose.connection.readyState);
    console.log(`Connected to backend!, listening to PORT: ${port}`);
})