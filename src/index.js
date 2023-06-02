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

setInterval(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
  location.reload()
}, 10000);

