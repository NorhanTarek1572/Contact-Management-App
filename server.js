const express = require('express');
const dotenv = require('dotenv').config(); // to know the port number of ower environment
const contact_router = require('./Routers/contact_router')
const  error_handler =require('./middelware/errorHandler')
const connectDb =require('./db/db_connection')


let  port =  process.env.PORT || 5000;
let app = express();


app.use(express.json()) // we use it to make the server get the data from the client in APIs
app.use('/api/contact',contact_router )
app.use(error_handler); 

app.listen(port , ()=>{console.log(`this server running in port number :  ${port}` )})


