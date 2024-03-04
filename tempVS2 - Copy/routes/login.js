const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/user');

router.get('/' , function(request , response){
        response.send(`<h2>get request on login</h2>`);
});
router.post('/' , function(request , response){

    const requestParams = {
        
        username: request.body.username,
        password: request.body.password
        
    };

    const joiSchema = Joi.object({
        username : Joi.string().min(3).max(50).required(),
        password : Joi.string().min(3).max(100).required()
    });
    if(!isValid(signinParams , tempSchema))
    
    isValid(requestParams , joiSchema).then(
        
    validRequest = true,

        findUser(request.body.username , request.body.password).then(
            // login User and pass auth & atent
        ).catch(

        )

    ).catch(
        validRequest = false ,
        response.set('content-type' , 'application/json').status(401).send(JSON.parse({message : 'Request parameters are not valid'}))
    );

});

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

async function findUser(username , password){
    const userObj = {username : username , password : password};
    const result = await User.find(userObj);
    return result;

}

module.exports = router;
