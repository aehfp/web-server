require('dotenv').config();
const express = require('express');
const app = require('express')();
const helmet = require('helmet');
const mongoose = require('mongoose');
const joi = require('joi');
const port = process.env.PORT || process.env.port || 80;
const login = require('./routes/login');
const signinRoute = require('./routes/signin');
const is_auth = require('./middleware/is-auth');


return;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.use('/signin' , signinRoute);





   


mongoose.connect(`${process.env.DataBase_URL}${process.env.DataBase_NAME}`).then(
    function(){
         app.listen(port , function(err){
            if(!err){console.log(`serverv is now running on PORT :${port}`);}
                else{console.log('some thing went wrong on starting server at given port');}
        });
        console.log("MongoDB is connected Successfully");
    }
).catch(function(){
    console.log("MongoDB Failed");
});




