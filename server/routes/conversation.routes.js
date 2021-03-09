const express = require('express')
const router= express.Router()

const Conversation = require('../models/message.model')

//create conversation -> el test me da 1.....en la terminal me sale un 200
router.post('/createConversation', (req, res) => {

    Conversation 
        .create()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating conversation', err}))

})


//getConversation en la ruta de la api findByUsers compruebe si los dos usuarios estn en users.
router.get('/getConversation', (req, res) => { // en el test me sale el error del html

    Conversation
        .findByUsers()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error conecting users', err}))
})





////createMessage -> el test me da 1.....en la terminal me sale un 200
router.post('/createMessage', (req, res) => {

    Conversation 
        .create()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating message', err}))
})




module.exports = router