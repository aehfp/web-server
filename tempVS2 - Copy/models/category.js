const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
        persian_name: {type : mongoose.Schema.Types.String , required : true , unique : true },
        english_name: {type : mongoose.Schema.Types.String , required : true , unique : true},
        image: {type : mongoose .Schema.Types.String , required : true , unique : true} , 
        coffee_id: {type : mongoose.Schema.Types.ObjectId , required : true , ref:"Coffee"},
        user_id: {type : mongoose.Schema.Types.ObjectId  , required : true , ref:'User'} 
});


const categoryModel = mongoose.model('categorie' , categorySchema);

module.exports = categoryModel;







