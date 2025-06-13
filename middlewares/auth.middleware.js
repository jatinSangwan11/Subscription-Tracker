import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

const authorize = async (req, res, next) => {
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];   // Extract the token from the Authorization header
        }

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
                error: "No token provided"
            });
        }
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded); // Debugging line to check the decoded token
        console.log("Decoded user ID:", decoded.userId); // Debugging line to check the user ID from the token

        const user = await User.findById(decoded.userId); // Exclude password from the user object
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        req.user = user; // Attach the user object to the request
        next(); // Call the next middleware or route handler

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access",
            error: error.message
        });
    }
}

export default authorize;
// This middleware checks if the user is authenticated by verifying the JWT token.
// If the token is valid, it retrieves the user from the database and attaches it to the request object.
// If the token is invalid or not provided, it returns an unauthorized error response.
// If the user is not found, it returns a 404 error response.
// This middleware is used to protect routes that require authentication.