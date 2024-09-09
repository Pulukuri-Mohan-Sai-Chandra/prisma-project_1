const express = require('express') 
const app = express();
const {UserRouter} = require('./Routers/UsersRouter') 

app.use(UserRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})