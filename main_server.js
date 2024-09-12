const express = require('express')
const app = express();
const { UserRouter } = require('./Routers/UsersRouter')
const body_parser = require('body-parser')

app.use(express.json())
app.use("/api", UserRouter);

app.use('/', (req, res) => {
    res.send("Server is Running on the Port 3000")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})