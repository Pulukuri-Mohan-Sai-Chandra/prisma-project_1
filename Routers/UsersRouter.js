const express = require('express')
const UserRouter = express.Router(); 
const {getAllUsers} = require('../query_helper_functions.js')
UserRouter.get('/users',async(req,res)=>{
    try{
        const data = await getAllUsers(); 
        res.status(200).send(data)
    }
    catch(e){
        res.status(400).send(e.message)
    }
})

module.exports = {
    UserRouter
}
