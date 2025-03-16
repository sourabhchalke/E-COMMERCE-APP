import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//App Config
const app = express();
const PORT = process.env.PORT || 4000 ;

//Middlewares
app.use(express.json());
app.use(cors());

//API Endpoints

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(PORT,()=> console.log(`Server Running on PORT : ${PORT}`));