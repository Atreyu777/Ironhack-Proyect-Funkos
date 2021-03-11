const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcrypt')

const User = require('../models/user.model')

router.post('/signup', (req, res) => { 

    const { username, name, email, password, avatar } = req.body

    if (!username || !name || !email || !password || !avatar) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    if (password.length < 3) {
        res.status(400).json({ message: 'Contraseña insegura' })
        return
    }
    const data = {}
    User.findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                data.status = 400
                data.message = "Este usuario ya existe"
                return
            }

            return User.findOne({ email })
        })
        .then(foundEmail => {
            if (foundEmail) {
                data.status = 400
                data.message = "Este email ya existe"
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)
            data.status = 200
            return User.create({ username, name, email, password: hashPass, avatar })
        })
        .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Error de registro' }) : res.status(data.status).json({ newUser, message: data.message })))
        .catch(() => res.status(500).json({ message: data.message }))
})

router.post('/login', (req, res, next) => { 

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error autenticando el usuario' })
            return
        }

        if (!theUser) {
            res.status(401).json(failureDetails)
            return
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Error de sesión' }) : res.json(theUser))

    })(req, res, next)

})

router.post('/logout', (req, res) => {
    req.logout()
    res.json({ message: '¡Sesión cerrada con éxito!' })
})

router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.json(req.user) : res.status(403).json({ message: 'No autorizado' }))

module.exports = router