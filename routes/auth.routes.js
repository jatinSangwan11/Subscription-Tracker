import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// /api/v1/auth
authRouter.post('/sign-up', signUp)

authRouter.post('/sign-in', signIn)

authRouter.post('/sign-out', signOut)

// export const routes = {authRouter};
export default authRouter;