const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')

//crear -> todo ok
router.post('/nuevoFunko', (req, res) => {

    Funko
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving funkos', err }))
})

//lista de funkos -> todo ok
router.get('/listadoFunkos', (req, res) => {

    Funko
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})
// //listado por filtro 


//detalles del funko -> todo ok
router.get('/Funko/detalles/:funko_id', (req, res) => {

    Funko
        .findById(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})

//editar funko -> todo ok
router.put('/Funko/editar/:funko_id', (req, res) => {

    Funko
        .findByIdAndUpdate(req.params.funko_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
})

//borrar funko


module.exports = router