import express from "express";
import dotenv from "dotenv";
import router from './router';
import cors from 'cors';

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env
console.log("Port: ", process.env.PORT);

//app.use(cors);
app.use(express.json());

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});