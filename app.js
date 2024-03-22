import express from "express";
import mongoose from 'mongoose' 
import router from "./routes/user-routes.js";
import blogrouter from "./routes/blog-routes.js";


const app=express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);
mongoose.connect('mongodb+srv://profanantgupta:F46JqdQv1UaJePQG@cluster0.zm1iawh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(()=>app.listen(5000))
.then(()=>console.log("Connected to Database and listening to localhost 5000")
).catch((err)=>console.log(err));


//F46JqdQv1UaJePQG