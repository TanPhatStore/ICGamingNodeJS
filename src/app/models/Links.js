
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Links = new Schema({
    title : {type : String},
    logo : {type : String},
    links : {type : [String]},
    URL : {type : String},
    password : {type : String} 
})

module.exports = mongoose.model('links', Links)