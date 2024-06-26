const express  = require("express")
const cors = require('cors')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 5000
const connection = require("./Config/configDB")
const routerApi = require("./Router/routeApi")
const routerWeb = require("./Router/routeWeb")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/Views'))
app.use(cors()) 

connection.connectMongoDB()
const ip = require("ip");


app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/api', routerApi)
app.use('/web', routerWeb)
app.get('/',(req,res)=>{
    res.send(
        "<h1> Deploy nodejs EC2 </h1>" +
        "<h2><a href='/web'>Web</a></h2>" +
        "<h2><a href='/api/user'>Api user</a></h2>" 
    )
})
 
app.listen(PORT, ()=>{
    console.log(`Server is running on http://${ip.address()}:${PORT}`)
})
