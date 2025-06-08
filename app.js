import express from "express";
import {PORT} from "./config/env.js";
import bodyParser from "body-parser";

// dotenv.config();

const app = express();
// Rather than using a hardcoded port, you can use an environment variable
// to set the port dynamically, which is useful for deployment environments
// const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const data = req.body 
    console.log(data);
    return res.send('Hello world!');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});