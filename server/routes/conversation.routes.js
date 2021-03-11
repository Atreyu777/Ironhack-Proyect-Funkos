const express = require('express')
const router = express.Router()

const Conversation = require('../models/message.model')

router.post('/createConversation', (req, res) => {

    let users = [req.body.owner, req.body.loggedUser]

    Conversation.findOne({ users: { $all: users } })
        .then(foundConversation => {
            if (foundConversation) {
                res.json({ id: foundConversation._id })
            } else {
                Conversation
                    .create({ users })
                    .then(newConversation => {
                        res.json({ id: newConversation._id })
                    })

                    .catch(err => res.status(500).json({ code: 500, message: 'Error creating conversation', err }))

            }
        })

        .catch(err => res.status(500).json({ code: 500, message: 'Error creating conversation', err }))

})

router.get('/showConversation/:conversation_id', (req, res) => {


    Conversation
        .findById(req.params.conversation_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error showing conversation', err }))

})

router.post('/newMessage/:conversation_id', (req, res) => {


    const messageContent = { username: req.body.username, text: req.body.message }

    Conversation
        .findByIdAndUpdate(req.params.conversation_id, { $push: { messages: messageContent } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating message', err }))

})

module.exports = router