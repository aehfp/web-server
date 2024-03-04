module.exports = function(request , response , next){
    //check for auth here 
    console.log('authrozition');
    next();
}