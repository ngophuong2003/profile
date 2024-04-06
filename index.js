const express = require("express")
const app = express()
const path=require('path')
var bodyParser= require('body-parser')

const AccountModel=require('./connect/connectDB')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname,'/public')))
app.get('/login', function(req, res) {
    var duongDan=path.join(__dirname,'login.html')
    res.sendFile(duongDan)
})
app.get('/index', function(req, res) {
    var duongDan=path.join(__dirname,'index.html')
    res.sendFile(duongDan)
})
app.get('/register', function(req, res) {
    var duongDan=path.join(__dirname,'register.html')
    res.sendFile(duongDan)
})


app.post('/register',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password
    var email=req.body.email
    var rpassword=req.body.rpassword

    AccountModel.findOne({
        username:username
    })
    .then(data=>{
        if(data){
            var duongDan=path.join(__dirname,'register')
            res.sendFile(duongDan)
        }
        else{
            var duongDan=path.join(__dirname,'login.html')
            res.sendFile(duongDan)
            return AccountModel.create({
                username:username,
                password:password,
                email:email    
            })
                
            
        }
    })
   
    .catch(err=>{
        res.status(500).json('Tạo tài khoản thất bại')
    })
})

app.post('/login',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password

    AccountModel.findOne({
        username:username,
        password:password
    })
        
    .then(data=>{
        if(data){
            console.log(username)
            var duongDan=path.join(__dirname,'index.html')
            res.sendFile(duongDan)
        }
        else{
            console.log(password)
            res.status(300).json('Thông tin tài khoản hoặc mật khẩu không chính xac')
        }
    })
 
    .catch(err=>{
        res.status(500).json('Server bị lỗi')
    })
})


app.get('/',(req,res,next)=>{
    res.json('HOME')
})


app.listen(3333,function(){

})



 



