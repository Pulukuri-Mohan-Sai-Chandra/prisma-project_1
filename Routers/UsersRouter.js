const express = require('express')
const UserRouter = express.Router(); 

const {
    createUser,
    deleteUser,
    getUser,
    updateUser
} = require('../Controllers/UserController')


UserRouter.get("/user/:uid",getUser); 
UserRouter.put("/user/:uid",updateUser);
UserRouter.post("/user",createUser);
UserRouter.delete("/user/:uid",deleteUser);


module.exports = {
    UserRouter
}