const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')

//crear -> todo ok
router.post('/newFunko', (req, res) => {

    const {  name, type, description, image } = req.body

    if (!name|| !type || !description || !image) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    Funko
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving funko', err }))
})

//lista de funkos -> todo ok
router.get('/list', (req, res) => {

    Funko
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})




//listado por filtro -> DEJAR PARA MAS ALANTE/// TEO pasar los filtros como query string
router.get('/list/filter', (req, res) => {     //res.json({ message: 'hola perra'})) <--FUNCIONA

    Funko
        .find() // mejor .find que .findOne() por si me salen varios??
        .select('name type') // setQuery???
        .then(response => res.json(response))      
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))

})





//detalles del funko -> todo ok
router.get('/details/:funko_id', (req, res) => {

    Funko
        .findById(req.params.funko_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funko', err }))
})

//borrar funko -> todo ok, lo encuentra y lo quita de la DB
router.get('/delete/:funko_id', (req, res) => {
    
    Funko
    .findByIdAndDelete(req.params.funko_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error deleting funko', err }))
})

//editar funko -> todo ok
router.put('/edit/:funko_id', (req, res) => {

    Funko
        .findByIdAndUpdate(req.params.funko_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing funko', err }))
})

module.exports = router