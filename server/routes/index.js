module.exports = app => {

    // Base URLS
    app.use('/api/funkinder', require('./funkos.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}