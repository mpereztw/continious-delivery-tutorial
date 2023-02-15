const express = require('express')
const say = require("./rutas/say")

module.exports = () => {
    const app = express()
    app.use('/say', say)
    return {app}
}