require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');
let hashedPassword = '';

router.get('/' , function(request , response){
    response.send(`<h2>get request on /signin </h2>`);
    //for sending/rendering signin page
});

router.post('/' , function(request , response){
    let validRequest = undefined;
    let signinParams = {
       first_name: request.body.first_name ,
        last_name : request.body.last_name ,
        username : request.body.username ,
        password : request.body.password ,
        nationalID : request.body.nationalID ,
        phone : request.body.phone 
    };


    const tempSchema = Joi.object({
        first_name : Joi.string().alphanum().min(3).max(25).required(),
        last_name : Joi.string().alphanum().min(3).max(45).required(),
        username : Joi.string().min(3).max(50).required(),
        password : Joi.string().min(3).max(100).required(),
        nationalID : Joi.string().min(9).max(11).required(),
        phone : Joi.string().min(11).max(11).required()
    });


        isValid(signinParams , tempSchema).then(
                validRequest = true
            
        ).catch(
            response.set('content-type' , 'application/json').status(401).send(JSON.parse({message : 'Request parameters are not valid'}))
        );


        let hashedPassword = '';
        getHash(request.body.password).
        then(function(result){
            hashedPassword = result;
        }).
        catch(function(err){
            hashedPassword = undefined;
            response.set('content-type' , 'application/json').status(401).send(JSON.parse({message : 'Bad Password Input'}));
        });
        
        if(hashedPassword){
            let userObj = createUserObj(
                request.body.first_name ,
                request.body.last_name ,
                request.body.username ,
                request.body.password ,
                request.body.nationalID ,
                request.body.phone 
                );
            }
                
    saveUserObj(userObj);
    response.set('content-type' , 'application/json').status(200).send(JSON.parse({message : 'User has been added successfuly'}));
});



function createUserObj(firstName , lastName , username , password , nationalID , phone){
    return new User({    
        first_name: firstName,
        last_name: lastName,
        username: username,
        password:password,
        nationalID:nationalID ,
        phone: phone,
        admin : false
    })
}
function createAdminObj(firstName , lastName , username , password , nationalID , phone , isAdmin){
    return new User({
        first_name: firstName,
    last_name:  lastName,
    username:   username,
    password:   password,
    nationalID: nationalID ,
    phone: phone,
    admin : isAdmin
    })
}

async function saveUserObj(userObj){
    await userObj.save();
}

async function getHash(passwordStr){
    const tempSalt = await bcrypt.genSalt(Number(process.env.HashedLevel));
    const tempHash = await bcrypt.hash(passwordStr , tempSalt);
    return tempHash;
}

async function isValid(requestParams , JoiSchema){
    
    try {
        const value = await JoiSchema.validateAsync(requestParams);
    }   
    catch (err) { 
        response.set('content-type' , 'application/json').status(401).send(JSON.parse({message : 'Request parameters are not valid'}));
        throw err;
    }

    if(value)
        return true;
    return false;
}

module.exports = router;