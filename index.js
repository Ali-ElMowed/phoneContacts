require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cros = require('cors');

const userRouter = require('./src/users');
const contactRouter = require('./src/contacts');

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
app.use('/api/contact',contactRouter);

app.listen(3000, () => console.log('Server running'));
