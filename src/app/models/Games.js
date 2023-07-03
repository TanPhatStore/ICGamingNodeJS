

const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Game = new Schema({
    title: {type : String},
    gender : {type : String},
    capacity : {type : String},
    numberUser : {type : String},
    ram : {type : String},
    language : {type : String},
    images : {type : [String]},
    logo : {type : String},
    linksDownload : {type : [String]},
    linksDownloadSecond : {type : [String]},
    logoSite : {type : String},
    releaseDate : {type : Date},
    updateDate : {type : Date},
    series : {type : String},
    gameType : {type : String},
    video : {type : String},
    dateVideo :  {type : Date},
    titleVideo : {type : String},
    description : {type : String},
    downloads : {type : Number, default : 0},
    second : {type : Number, default : 0}
});

module.exports = mongoose.model('games', Game)