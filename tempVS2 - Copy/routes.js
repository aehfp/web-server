const express = require('express');
const router = express.Router();

router.get('/' , function (request , response){
    console.log('request comes');
    let text = 'this is route handling';
    response.send(`<h2>${text}</h2>`);
});

module.exports = router;