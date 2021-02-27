module.exports = app => {

    // Base URLS
    app.use('/api/funkinder', require('./funkos.routes.js'))
}