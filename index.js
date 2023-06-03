const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3002
const route = require('./src/routes')
const db = require('./src/config/db')
const cors = require('cors')
const { format } = require('date-fns')
const Game = require('./src/app/models/Games')
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'src/public')))
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
app.set('views', path.join(__dirname, 'src/resources/views'));

// Route init
route(app)
// connect to db
db.connect()



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

