import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
    res.json({message: "sign up"})
})

authRouter.post('/sign-in', (req, res) => {
    res.json({message: "sign in"})
})

authRouter.post('/sign-out', (req, res) => {
    res.json({message: "sign-out"})
})

// export const routes = {authRouter};
export default authRouter;