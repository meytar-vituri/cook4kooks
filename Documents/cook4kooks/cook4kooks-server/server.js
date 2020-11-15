import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import recipesRouter from './routes/recipesRoutes.js';
import cors from 'cors';



const app = express();
const port = process.env.port || 3000

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://localhost/cook4kooks',{useNewUrlParser:true})
.then(() => console.log('connected!'))
.catch ((err) =>console.log('error connecting', err));
var db = mongoose.connection;

if (!db){
    console.log("error connecting to db");
} else {
    console.log("connecte successfully!");
}


app.use('/Recipes', recipesRouter);

app.get('/', (req, res) =>{
    res.send('this is working');
})




app.listen(port, () =>{
    console.log('running on ' + port);
})

/*
/ --> res = this is working
/Recipes --> GET = name, id from recipes
/Recipes/:recipeID --> GET = recipe where id ===recipeID
*/