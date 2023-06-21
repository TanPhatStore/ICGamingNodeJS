
const mongoose = require('mongoose')

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
        try {
            await mongoose.connect('mongodb+srv://todo:ducvu0969@cluster0.rtm9n9x.mongodb.net/icgaming?retryWrites=true&w=majority',{
                useNewUrlParser : true,
                useUnifiedTopology : true
            })
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
        }
    }, 300000)

}

module.exports = {connect}