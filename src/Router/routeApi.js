const ApiController = require("../Controller/Api")
const Middleware = require("../Middleware/middlewareUser")
const router = require("express").Router()

router.get('/user', ApiController.findAllUser)
router.post('/user1', ApiController.findOneUser)
router.put('/user/:id', ApiController.updateUser)
router.post('/user', ApiController.cretaeUser)
router.delete('/user/:id',Middleware.checkAdmin, ApiController.deleteUser)

router.post('/point',ApiController.findPointUser)

module.exports = router