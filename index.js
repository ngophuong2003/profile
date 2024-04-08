const express = require("express")
const app = express()
const path=require('path')
const bcrypt = require('bcrypt');
const AccountModel=require('./connect/connectDB');
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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
app.get('/trangchu/news', function(req, res) {
    var duongDan=path.join(__dirname,'/views/index-news.html')
    res.sendFile(duongDan)
})
app.get('/trangchu/world', function(req, res) {
    var duongDan=path.join(__dirname,'/views/index-world.html')
    res.sendFile(duongDan)
})
app.get('/trangchu/economy', function(req, res) {
    var duongDan=path.join(__dirname,'/views/index-economy.html')
    res.sendFile(duongDan)
})


app.post('/dangky',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password
    var email=req.body.email
    var rpassword=req.body.rpassword
    
    AccountModel.findOne({ username: username })
   .then((data) => {
    if (data) {
        res.redirect("/dangky");
    } else {
        bcrypt.hash(password, 10, (err, hashPassword) => {
            if (err) {
                console.error(err)
            } else {
                AccountModel.create({
                    username:username,
                    password: hashPassword,
                    email:email    
                })
                res.redirect("/");  
            }
        });
    }
  })
  .catch((err) => {
    // Xử lý lỗi truy vấn database
    console.error("Lỗi truy vấn:", err);
  });
});
   

app.post('/',(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password
    AccountModel.findOne({username:username})   
    .then(function(data){
        console.log(data)
        if(data) {
            bcrypt.compare(password,data.password, function(err, result) {
                if (result === true) {
                    console.log('Mật khẩu khớp!');
                    res.redirect('/trangchu');
                  } else {
                    console.log('Mật khẩu không khớp!');
                    res.redirect('/');
                  }
            });
           
        }
        else res.redirect('/');
    })
    
});
app.listen(3000,function(){

})



 



