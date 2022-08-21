const UserController = require('./controllers/UserController')

module.exports = (app) => {
    // RESFUL Api for users management

    // Create user
    app.post('/user', UserController.create)
    // Edit user
    app.put('/user/:userId',UserController.put)
    // Delete user
    app.delete('/user/:userId',UserController.remove)
    // Get user by id
    app.get('/user/:userId',UserController.show)
    // Get all user
    app.get('/users',UserController.index)
}