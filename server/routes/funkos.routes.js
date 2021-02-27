const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')

//crear
router.get('/nuevoFunko', (req, res) => res.json({ message: 'hola perra'}))

//     Funko
//         .create(req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error saving funkos', err }))
// })

// //lista de funkos
// router.get('/listadoFunkos', (req, res) => {

//     Funko
//         .find()
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
// })
// //listado por filtro 


// //detalles del funko
// router.get('/Funko/details/:funko_id', (req, res) => {

//     Funko
//         .findById(req.params.funko_id)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
// })

// //editar funko
// router.put('/funko/edit/:funko_id', (req, res) => {

//     Funko
//         .findByIdAndUpdate(req.params.funko_id, req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
// })

// //borrar funko


module.exports = router