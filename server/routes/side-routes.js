var Sides = require('../models/side')
var router = require('express').Router()

router.get('/api/sides', (req, res, next) => {
    Sides.find({})
        .then(sides => res.send(sides))
        .catch(err => res.status(400).send(err))
})

router.get('/api/sides/:id', (req, res, next) => {
    Sides.findById(req.params.id)
        .then(side => res.send(send))
        .catch(err => res.status(400).send(err))
})

router.post('/api/sides', (req, res, next) => {
    Sides.create(req.body)
        .then(side => res.send(side))
        .catch(err => res.status(400).send(err))
})

router.put('/api/sides/:id', (req, res, next) => {
    Sides.findByIdAndUpdate(req.params.id, req.body)
        .then(side => res.send(side))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/sides/:id', (req, res, next) =>{
    Sides.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: "Successfully removed side"}))
    .catch(err => res.status(400).send(err))
})

module.exports = router