import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    const userId = req.params.id;
    console.log("User ID:", userId); // Debugging line to check the user ID
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "User retrieved successfully for the given ID",
            data: user
        });
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    // I have to create a user --> I will be needing name, email, password 
    try {
        const { name, email, password } = req.body;
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email, hashedPassword });
        console.log("new user created:", newUser);
        res.status(201).json({
            success: true,
            message: "New user created",
            data: {
                id: newUser[0]._id,
                email: newUser[0].email,
                name: newUser[0].name
            }
        })
    } catch (error) {
        next(error);
    }

}