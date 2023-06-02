
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
    const { exec } = require('child_process');
    setInterval(() => {
        exec('nodemon src/index.js', (error, stdout, stderr) => {
        if (error) {
        console.error(`Lỗi khi khởi động lại ứng dụng: ${error.message}`);
        return;
        }
        console.log(`Ứng dụng Node.js đã khởi động lại.`);
        console.log(`Kết quả: ${stdout}`);
    });
    }, 5000);

    setInterval(async () => {
        try {
            await mongoose.connect('mongodb+srv://dbTest:ducvu0969@cluster0.rtm9n9x.mongodb.net/icgaming',{
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