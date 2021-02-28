const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')

//crear -> todo ok
router.post('/nuevoFunko', (req, res) => {

    Funko
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving funko', err }))
})

//lista de funkos -> todo ok
router.get('/listadoFunkos', (req, res) => {

    Funko
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})
// //listado por filtro este tengo que estudiarmelo bien


//detalles del funko -> todo ok
router.get('/Funko/detalles/:funko_id', (req, res) => {

    Funko
        .findById(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funko', err }))
})


//borrar funko -> todo ok, lo encuentra y lo quita de la DB
router.get('/Funko/borrar/:funko_id', (req, res) => {
    
    Funko
    .findByIdAndDelete(req.params.funko_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error deleting funko', err }))
})


//editar funko -> todo ok
router.put('/Funko/editar/:funko_id', (req, res) => {

    Funko
        .findByIdAndUpdate(req.params.funko_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
})

module.exports = router