const UserController = require('./controllers/UserController')
const verifyJWT = require('./middleware/verifyJWT')
const ROLES_LIST = require('./config/roles_list')
const verifyRoles = require('./middleware/verifyRoles')
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
    
    //Below this line need jwtToken (Login)
    app.use(verifyJWT) 
    // Get all user
    app.get('/users',verifyRoles(ROLES_LIST.User),UserController.index)
}