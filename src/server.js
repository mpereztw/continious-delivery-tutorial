const express = require('express')
const say = require("./rutas/say")

module.exports = () => {
    const app = express()
    app.use('/say', say)
    const server = app.listen(3000, () => {
        console.log(" mi servidor esta funcionando")
    })
    return {app, server}
}