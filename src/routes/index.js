

const siteRouter = require('./site')
const gameRouter = require('./game')    
const linksRouter = require('./links')

function route (app) {

    app.use('/game', gameRouter)
    app.use('/', siteRouter)
    app.use('/links', linksRouter)
}
module.exports = route;