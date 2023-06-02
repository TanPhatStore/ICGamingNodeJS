

const siteRouter = require('./site')
const gameRouter = require('./game')    

function route (app) {

    app.use('/game', gameRouter)
    app.use('/', siteRouter)

}
module.exports = route;