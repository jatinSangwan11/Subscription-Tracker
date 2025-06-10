import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("please define the mongodb URI")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("connected to database")
    } catch (err) {
        console.error("Error connecting to db", err)
        process.exit(1);
    }
}

export default connectToDatabase;  