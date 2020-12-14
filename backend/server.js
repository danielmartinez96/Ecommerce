import express from 'express'; 
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb://localhost/amazona',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.get('/',(req, res) =>{
    res.send('Server is ready');
});

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});