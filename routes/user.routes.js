import { Router } from "express";
import { getUser, getUsers, createUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";


const userRouter = Router();

// GET /users -> get all the users 
// GET /users/:id -> get users by id

// /api/v1/users

userRouter.get ('/', getUsers)  // prevent users to make a call here as it would expose all the users to anybody 

userRouter.get('/:id',authorize ,getUser)

userRouter.post ('/', createUser)

userRouter.put('/:id', (req ,res) => {
    res.json({message: "update user with the user Id"})
})

userRouter.delete('/:id', (req ,res) => {
    res.json({message: "delete user with the user Id"})
}) 
 

export default userRouter;