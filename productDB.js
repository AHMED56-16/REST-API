import { connectDB } from "./db/connect.js";
import Product from "./models/product.js";
import dotenv from "dotenv";
dotenv.config();
import ProductJson from "./products.json" assert { type: 'json' };

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();
