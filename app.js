import express from "express";
import {PORT} from "./config/env.js";
// import bodyParser from "body-parser";
import authRouter from "./routes/auth.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// dotenv.config();

const app = express();
// Rather than using a hardcoded port, you can use an environment variable
// to set the port dynamically, which is useful for deployment environments
// const PORT = process.env.PORT || 3000;

// generally app.use is used for middlewares
app.use(express.json());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

// this is the error Middleware
app.use(errorMiddleware)

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
});