const { Router } = require("express");
const { decirHola } = require("./say")
const router = Router()

router.get("/hola/:nombre", (req, res) => {
    res.send(decirHola(req.params.nombre));
})

module.exports = router;