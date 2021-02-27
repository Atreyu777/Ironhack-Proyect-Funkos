const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')


router.put('/newFunko', (req, res) => {

    Funko
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving funkos', err }))
})


router.get('/getAllFunkos', (req, res) => {

    Funko
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})


router.get('/getOneFunko/:funko_id', (req, res) => {

    Funko
        .findById(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})


router.put('/editFunko/:funko_id', (req, res) => {

    Funko
        .findByIdAndUpdate(req.params.funko_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
})


module.exports = router