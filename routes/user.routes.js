import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

// GET /users -> get all the users 
// GET /users/:id -> get users by id

// /api/v1/users

userRouter.get ('/', getUsers)

userRouter.get('/:id', getUser)

userRouter.post ('/', (req, res) => {
    res.json({message: "create new user"})
})

userRouter.put('/:id', (req ,res) => {
    res.json({message: "update user with the user Id"})
})

userRouter.delete('/:id', (req ,res) => {
    res.json({message: "delete user with the user Id"})
})


export default userRouter;