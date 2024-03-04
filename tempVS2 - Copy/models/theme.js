const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String , required : true , unique : true} ,
    image: {type: mongoose.Schema.Types.String , required : true , unique : true},

});

const themeModel = mongoose.model( 'theme' , themeSchema);
module.exports = themeModel;