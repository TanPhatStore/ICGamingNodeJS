
const Links = require('../models/Links')

class LinksController {

    async api (req, res) {
        const links = await Links.find({})
        res.json(links)
    }

    async insert (req, res) {
        try {
            const data = req.body
            const links = new Links(data)
            await links.save()
            const link = await Links.findOne({title : links.title})
            link.URL = `https://icgaming.vercel.app/links-${link._id}`
            await Links.updateOne({_id : link.id},{URL : link.URL})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 404})
        }
    }

    async delete (req, res) {
        try {
            const id = req.body.id
            console.log(id)
            await Links.deleteOne({_id : id})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }

    async findById (req, res) {
        try {
            const link = await Links.findById(req.query.id)
            res.json(link)
        } catch (error) {
            res.json({status : 500})
        }
    }

    async update (req, res) {
        try {
            await Links.updateOne({_id : req.body.id},{title : req.body.title, logo : req.body.logo, links : req.body.links, password : req.body.password})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }
}

module.exports = new LinksController