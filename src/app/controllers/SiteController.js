
const Game = require('../models/Games')

class SiteController{

    // GET /
    async index(req, res) {
        try {
          const gameDocs = await Game.find({});
          const games = gameDocs.map(doc => doc.toObject());
        
          res.render('home', { games}); // Truyền danh sách gamesvào render()

        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
    }

    // GET /search
    search (req, res) {
        res.render('search')
    }

}

module.exports = new SiteController;