
const {v7} = require('uuid')
const {saveUser} = require('../query_helper_functions')
const getUser = async (req, res) => {
    res.send("Getting User Route is Working")
}
const updateUser = async (req, res) => {
    res.send("Updation user Route is Working ")
}
const createUser = async (req, res) => {
    const keys = Object.keys(req.body);
    if(keys.length == 0){
        res.json({
            status:"FAILURE",
            message:"DATA OBJECT IS EMPTY"
        })
    }
    else{
        const userObj = {}
        for(const key of keys){
            userObj[key.toUpperCase()] = req.body[key];
        }
        console.log(userObj)
        userObj['USER_ID'] = v7();
        const response = await saveUser(userObj);
        res.json(response)
    }

}
const deleteUser = async (req, res) => {
    res.send("Deleting User Route is Working ")
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser
}