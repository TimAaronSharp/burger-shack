var Burgers = require('../models/burger')
var Drinks = require('../models/drink')
var Sides = require('../models/side')
var router = require('express').Router()

router.get('/api/menu', (req, res, next) => {
    var items = {
        burgers: [],
        drinks: [],
        sides: []
    }
    var menu = {
        burgers: [],
        drinks: [],
        sides: []
    }

    Burgers.find({})
        .then(burgers => {
            items.burgers = burgers
            Drinks.find({})
                .then(drinks => {
                    items.drinks = drinks
                    Sides.find({})
                        .then(sides => {
                            items.sides = sides
                            for (const key in items) {
                                const category = items[key];
                                for (let i = 0; i < key.length; i++) {
                                    menu[key][i] = category.name
                                    menu[key][i] = category.price

                                }


                            }

                            res.send(menu)
                        })
                        .catch(err => res.status(400).send(err))
                })
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
})

module.exports = router