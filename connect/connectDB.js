
const mongoose = require('mongoose');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
mongoose.connect('mongodb://localhost:27017/webproject',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(() => console.log('Kết nối thành công!'))
.catch(err => console.error('Lỗi kết nối:', err));

const Schema=mongoose.Schema;

const AccountSchema= new Schema({
  username: String,
  password: String,
  email:String
},{
  collection:'phuong'
});
const AccountModel = mongoose.model('phuong', AccountSchema)

module.exports=AccountModel

