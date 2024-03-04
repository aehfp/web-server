const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: {type:mongoose.Schema.Type.String , required : true } ,
    description: {type: mongoose.Schema.Type.String , required : false } ,
    socials: {type: [mongoose.Schema.Types.String ] , required : false , unique : true} ,
    logo: {type: mongoose.Schema.Types.String , required : false} ,
    slug: {type: mongoose.Schema.Type.String , required : true , unique : true } ,
    user_id: {type: mongoose.Schema.Types.ObjectId , required : true , unique : true , ref : 'User'} ,
    theme_id: {type: mongoose.Schema.Types.ObjectId , required : false , ref : 'Theme'}
}); 
const coffeeModel = mongoose.model('coffee', coffeeSchema);
module.exports = coffeeModel;