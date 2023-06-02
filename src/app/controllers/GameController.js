
const Game = require('../models/Games')
const fs = require('fs')

class GameController {

    // GET /game
    index (req, res) {
        res.render('game')
    }

    // GET /game-api-v1
    game_api (req, res) {

        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
              console.error('Lỗi khi đọc tệp JSON:', err);
              return;
            }
            const documents = JSON.parse(data);
            try {
                res.json(documents)
            } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }

    // GET /game-actions
    action_insert (req, res) {
        res.render('game/game-action-insert')
    }

    async action_update (req, res) {
        const doc = await Game.findOne({_id : req.query.gameId });
        const game = doc.toObject()
        res.render('game/game-action-update', {game})
    }

    async deleteAll (req, res) {

        await Game.deleteMany({})
          .then(() => res.redirect('/'))
          .catch((error) => res.status(500).json({ error: 'Internal server error' }));
    }

    async detele (req, res) {
        const id = req.body.gameId

        await Game.deleteOne({_id : id})
            .then(() => res.redirect('/'))
            .catch((error) => res.status(500).json({ error: 'Internal server error' }));
    }

    async insert(req, res) {
        const gameData = req.body;
        const game = new Game(gameData);
        const num = await Game.count({}) + 1
        game.updateDate = new Date()
        
        let filteredArray = game.images.filter(function(element) {
            return element !== "";
        });
        game.images = filteredArray

        let filteredArray1 = game.linksDownload.filter(function(element) {
            return element !== "";
        });
        game.linksDownload = filteredArray1
        game.save()
          .then(() => res.redirect('/'))
          .catch((error) => res.status(500).json({ error: 'Internal server error' }));
    }

    async update (req, res) {
        const game = req.body;
        game.updateDate = new Date()
        let filteredArray = game.images.filter(function(element) {
            return element !== "";
        });
        game.images = filteredArray

        let filteredArray1 = game.linksDownload.filter(function(element) {
            return element !== "";
        });
        game.linksDownload = filteredArray1
        Game.updateOne({_id : req.body.gameId}, game)
            .then(() => res.redirect('/'))
            .catch((error) => res.status(500).json({ error: 'Internal server error' }));
    }
      
}

module.exports = new GameController