import { Router } from "express";

const userRouter = Router();

// GET /users -> get all the users 
// GET /users/:id -> get users by id

userRouter.get ('/', (req, res) => {
    res.json({message: "GET all users"})
})

userRouter.get('/:id', (req ,res) => {
    res.json({message: "GET user with the user Id"})
})

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