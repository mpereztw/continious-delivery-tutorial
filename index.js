const express = require('express')
const app = express()
const say = require("./src/rutas/say")

app.use('/say', say)

app.listen(3000, () => {
    console.log(" mi servidor esta funcionando")
})

module.exports = app