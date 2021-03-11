const express = require('express')
const router = express.Router()
const Funko = require('../models/funko.model')


router.post('/newFunko', (req, res) => {

    const { name, description, type, image, price } = req.body

    if (!name || !description || !type || !image || !price) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    const funko = { ...req.body, owner: req.user._id }

    Funko
        .create(funko)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving funko', err }))
})

router.get('/list', (req, res) => {

    Funko
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})

router.get('/listOwner', (req, res) => {

    Funko
        .find({ owner: req.user._id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})


router.get('/list/filter/:name', (req, res) => {

    Funko
        .find({ name: req.params.name })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))

})

router.get('/details/:funko_id', (req, res) => {

    Funko
        .findById(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funko', err }))
})

router.delete('/delete/:funko_id', (req, res) => {

    Funko
        .findByIdAndDelete(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting funko', err }))
})

router.put('/edit/:funko_id', (req, res) => {

    Funko
        .findByIdAndUpdate(req.params.funko_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
})

module.exports = router