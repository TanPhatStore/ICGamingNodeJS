const express = require('express')
const router = express.Router()
const gameController = require('../app/controllers/GameController')


router.get('/game-api-v1', gameController.game_api)
router.post('/game-insert', gameController.insert)
router.post('/game-delete', gameController.detele)
router.post('/game-update', gameController.update)
router.post('/game-deleteAll', gameController.deleteAll)
router.get('/game-actions-insert', gameController.action_insert)
router.get('/game-actions-update', gameController.action_update)
router.put('/update-downloads-game', gameController.updateDownloads)
router.put('/update-second-game', gameController.updateSecond)
router.get('/', gameController.index)


module.exports = router