const express = require("express")
const app = express()
const path=require('path')
var bodyParser= require('body-parser')

const AccountModel=require('./connect/connectDB')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname,'/public')))
app.get('/', function(req, res) {
    var duongDan=path.join(__dirname,'login.html')
    res.sendFile(duongDan)
})
app.get('/trangchu', function(req, res) {
    var duongDan=path.join(__dirname,'index.html')
    res.sendFile(duongDan)
})


app.post('/',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password

    AccountModel.create({
        username:username,
        password:password
    })
    .then(data=>{
        res.json('thanh cong')
    })
    .catch(err=>{
        res.status(500).json('that bai')
    })
})

app.get('/',(req,res,next)=>{
    res.json('HOME')
})










app.listen(3333,function(){

})



 



