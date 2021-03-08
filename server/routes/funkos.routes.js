const express = require('express')
const router = express.Router()

const Funko = require('../models/funko.model')

//crear -> todo ok
router.post('/newFunko', (req, res) => {

    const { name, description, type, image, price } = req.body
    
    if (!name|| !description || !type || !image || !price) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }
    
    const funko = {...req.body, owner: req.user._id}
    
    Funko
        .create(funko)
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

//lista de Funkos en perfil -> todo ok
router.get('/listOwner', (req, res) => {

    Funko
        .find({owner: req.user._id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching funkos', err }))
})

//listado por filtro -> 
router.get('/list/filter/:name', (req, res) => { 

    Funko
        .find({name: req.params.name}) 
        .populate('owner')
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
router.delete('/delete/:funko_id', (req, res) => {
    
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