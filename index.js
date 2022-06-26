require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cros = require('cors');


const userRouter = require('./src/users');
const contactRouter = require('./src/contacts');
const auth = require("./src/middlewares/auth");


mongoose.connect('mongodb://localhost:27017/phoneContacts').then(()=>{
    console.log("connected")
    
})
.catch((error)=>{
    console.log(error)
});

const app = express();
app.use(cros());
app.use(express.json());    

app.use('/api/user',userRouter);
app.use('/api/contact',auth,contactRouter);

app.use('/welcome', auth , (req,res)=>{
    res.status(200).send('welcome');
})

app.listen(3000, () => console.log('Server running'));
