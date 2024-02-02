const ApiController = require("../Controller/Api")
const Middleware = require("../Middleware/middlewareUser")
const router = require("express").Router()

router.get('/', (req,res)=>{
    const data={"StatusServer": "true"}
    return res.json(data)
})
router.get('/user', ApiController.findAllUser)
router.post('/user1', ApiController.findOneUser)
router.post('/userc', ApiController.findByCodeUser)
router.put('/user/:id', ApiController.updateUser)
router.post('/user', ApiController.cretaeUser)
router.delete('/user/:id',Middleware.checkAdmin, ApiController.deleteUser)

router.post('/point',ApiController.findPointUser)

module.exports = router