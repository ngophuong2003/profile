const express = require("express")
const app = express()
const path=require('path')
var bodyParser= require('body-parser')

const AccountModel=require('./connect/connectDB')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname,'/public')))
app.get('/', function(req, res) {
    var duongDan=path.join(__dirname,'/views/login.html')
    res.sendFile(duongDan)
})
app.get('/trangchu', function(req, res) {
    var duongDan=path.join(__dirname,'/views/index.html')
    res.sendFile(duongDan)
})
app.get('/dangky', function(req, res) {
    var duongDan=path.join(__dirname,'/views/register.html')
    res.sendFile(duongDan)
})


app.post('/dangky',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password
    var email=req.body.email
    var rpassword=req.body.rpassword

    AccountModel.findOne({
        username:username
    })
    .then(data=>{
        if(data){
            var duongDan=path.join(__dirname,'/views/register.html')
            res.sendFile(duongDan)
        }
        else{
            var duongDan=path.join(__dirname,'/views/login.html')
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

app.post('/',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password

    AccountModel.findOne({
        username:username,
        password:password
    })
        
    .then(data=>{
        if(data){
            console.log('2')
            var duongDan=path.join(__dirname,'/views/index.html')
            res.sendFile(duongDan)
        }
        else{
            console.log('1')
            var duongDan=path.join(__dirname,'/views/login.html')
            res.sendFile(duongDan)
            res.status(300).json('Thông tin tài khoản hoặc mật khẩu không chính xac')
        }
    })
 
    .catch(err=>{
        res.status(500).json('Server bị lỗi')
    })
})




app.listen(3333,function(){

})



 



