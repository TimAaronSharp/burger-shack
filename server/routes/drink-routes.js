var Drinks = require('../models/drink')
var router = require('express').Router()


router.get('/api/drinks', (req, res, next) => {
    Drinks.find({})
        .then(drinks => res.send(drinks))
        .catch(err => res.status(400).send(err))
})

router.get('/api/drinks/:id', (req, res, next) => {
    Drinks.findById(req.params.id)
        .then(drink => res.send(drink))
        .catch(err => res.status(400).send(err))
})
router.put('/api/drinks/:id', (req, res, next) => {
    Drinks.findByIdAndUpdate(req.params.id, req.body)
        .then(drink => res.send(drink))
        .catch(err => res.status(400).send(err))
})

router.post('/api/drinks', (req, res, next) => {
    if (!req.body.sizes.l || !req.body.sizes.m || !req.body.sizes.s) {
        return res.send('INVALID DRINK PLEASE INCLUDE SIZES')
    }
    var drink = {
        name: req.body.name,
        sizes: {
            l: req.body.sizes.l,
            m: req.body.sizes.m,
            s: req.body.sizes.s
        }
    }
    Drinks.create(drink)
        .then(drink => {
            res.send(drink)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/api/drinks/:id', (req, res, next) => {
    Drinks.findByIdAndRemove(req.params.id)
        .then(() => res.send({ message: "Successfully removed"}))
        .catch(err => res.status(400).send(err))
})











module.exports = router