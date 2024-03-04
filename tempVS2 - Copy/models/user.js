const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    first_name: { type: mongoose.Schema.Types.String , required : true},
    last_name: { type: mongoose.Schema.Types.String , required: true },
    username:{ type: mongoose.Schema.Types.String , required: true},
    password:{ type: mongoose.Schema.Types.String , required: true},
    nationalID: { type: mongoose.Schema.Types.String , required : true , unique : true} ,
    phone: { type: mongoose.Schema.Types.String , required : true , unique : true},
    admin : { type: mongoose.Schema.Types.Boolean , required : true , default : false}
}); 
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;