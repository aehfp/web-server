const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type : mongoose.Schema.Types.String , required : true } ,
    image: {type : mongoose.Schema.Types.String , required : true  , unique : true},
    description: {type : mongoose.Schema.Types.String , required : false } , 
    prices: {type : mongoose.Schema.Types.Number , required : true } ,
    category: {type : mongoose.Schema.Types.String , required : true , unique : true},
    coffee_id: {type : mongoose.Schema.Types.ObjectId , required : true } , 
    category_id: {type : mongoose.Schema.Types.ObjectId , required : true}
});

const itemModel = mongoose.model('item' , itemSchema);
module.exports = itemModel;