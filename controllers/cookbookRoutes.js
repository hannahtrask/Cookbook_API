const express = require('express')
const router = express.Router()
//import cookbook
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
//GET
router.get('/', async (req, res) => {
    const cookbooks = await Cookbook.find({})
    res.json({status:200, cookbooks:cookbooks})
})

// Write the route to get cookbook by title
router.get('/title/:title', async (req, res) => {
    const cookbook = await Cookbook.find({title: req.params.title})
    res.json({status:200, cookbook:cookbook})
})

// Write the route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
    const cookbook = await Cookbook.find({yearPublished: req.params.year})
    res.json({status:200, cookbook:cookbook})
})

// Write the route to create a cookbook
router.post('/', async (req, res) => {
    const cookbook = await Cookbook.create(req.body)
    res.json({status:200, cookbook:cookbook})
})

// Write the route to update a cookbook
router.put('/:_id', async (req, res) => {
    const cookbook = await Cookbook.findByIdAndUpdate( req.params._id, req.body, { new: true })
    res.json({status:200, cookbook:cookbook})
})

// Write the route to delete the cookbook by title
router.delete('/:_id', async (req, res) => {
    const cookbook = await Cookbook.findByIdAndDelete(req.params._id)
    res.json({status:200, message: 'item deleted: ', cookbook})
})


module.exports = router;