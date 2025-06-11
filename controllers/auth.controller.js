import mongoose from "mongoose"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Importing environment variables for JWT secret and expiry
import { JWT_EXPIRY, JWT_SECRET } from "../config/env.js";

export const signUp = async (req, res, next) => {
    // Implement the signup logic -- we are applying mongoose session here
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const {name, email, password} = req.body;

        const exitingUser = await User.findOne({email});

        if(exitingUser) {
            const err = new Error("User already exists");
            err.statusCode= 400;
            throw err;
        }

        // so the user does not exist, we can create a new user and also hash the password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // here the array of objects is used to make as many users we want
        const newUsers = await User.create([{
            name,
            email,
            password: hashedPassword
        }], {session});  

        const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRY});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: {
                    id: newUsers[0]._id,
                    name: newUsers[0].name,
                    email: newUsers[0].email
                }
            }
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error)
    }
}


export const signIn = async (req, res, next) => {
    // Implement the signIn logic
}


export const signOut = async (req, res, next) => {
    // Implement the signOut logic
}