
const mongoose = require('mongoose')

async function connect () {

    try {
        await mongoose.connect('mongodb+srv://dbTest:ducvu0969@cluster0.rtm9n9x.mongodb.net/icgaming',{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }

}

module.exports = {connect}