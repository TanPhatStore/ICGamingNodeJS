const express = require('express')
const router = express.Router()
const LinksController = require('../app/controllers/LinksController')

router.post('/insert', LinksController.insert)
router.get('/api', LinksController.api)
router.post('/delete', LinksController.delete)
router.get('/getById', LinksController.findById)
router.post('/update', LinksController.update)

module.exports = router