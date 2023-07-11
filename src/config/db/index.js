
const mongoose = require('mongoose')
const Game = require('../../app/models/Games')

async function connect () {

    try {
        await mongoose.connect('mongodb+srv://todo:ducvu0969@cluster0.rtm9n9x.mongodb.net/icgaming?retryWrites=true&w=majority',{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }

    setInterval(async () => {
        const d = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }).split(' ')[0]
        if (parseInt(d.split(':')[0]) == 0 && parseInt(d.split(':')[1]) == 0 && parseInt(d.split(':')[2]) == 0) {
            await Game.updateMany({}, {second : 0, downloads : 0 })
        }
    }, 1000)

}

module.exports = {connect}