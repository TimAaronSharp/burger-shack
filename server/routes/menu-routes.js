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
            
            for (let i = 0; i < items.burgers.length; i++) {
                menu.burgers[i] = {}
                menu.burgers[i].name = items.burgers[i].name
                menu.burgers[i].price = items.burgers[i].price
            }
            Drinks.find({})
                .then(drinks => {
                    items.drinks = drinks
                
                    for (let i = 0; i < items.drinks.length; i++) {
                        menu.drinks[i] = {}
                        menu.drinks[i].name = items.drinks[i].name
                        menu.drinks[i].sizes = items.drinks[i].sizes

                    }
                    Sides.find({})
                        .then(sides => {
                            items.sides = sides
                    
                            for (let i = 0; i < items.sides.length; i++) {
                                menu.sides[i] = {}
                                menu.sides[i].name = items.sides[i].name
                                menu.sides[i].price = items.sides[i].price
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