const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3002
const route = require('./routes')
const db = require('./config/db')
const cors = require('cors')
const { format } = require('date-fns')
const Game = require('./app/models/Games')
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(cors([{
    origin: 'http://localhost:3000'
  },
  {
    origin: 'https://ic-gaming-download-game.vercel.app/'
  }
]));

app.engine('hbs', engine({
  extname:'.hbs',
  helpers: {
    formatDate: function (date) {
      return format(date, 'yyyy-MM-dd');
    }
  }
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

// Route init
route(app)
// connect to db
db.connect()



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


setInterval(async() => {
    try {
        const documents = await Game.find({});
        fs.writeFile('data.json', JSON.stringify(documents), 'utf8', (err) => {
          if (err) {
            console.error('Lỗi khi ghi tệp JSON:', err);
            return;
          }
          console.log('Đã ghi tệp JSON thành công!');
        });
    } catch (error) {
        console.log(error)
    }
}, 10000)

