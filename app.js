import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connect.js';
import product_routes from './routes/products.js';

const app = express()
dotenv.config();
const PORT =process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.send("I am live")
})


app.use("/api/products",product_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`Server is running at port number ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();