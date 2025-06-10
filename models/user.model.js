import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minLength: [6, "Password must be at least 6 characters long"]
    }
}, {timestamp: true} )

const User = mongoose.model("User", userSchema);

export default User;