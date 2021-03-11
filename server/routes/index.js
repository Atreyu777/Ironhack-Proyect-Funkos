module.exports = app => {


    app.use('/api/funkinder', require('./funkos.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/conversation', require('./conversation.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}