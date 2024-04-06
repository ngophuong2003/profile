
const mongoose = require('mongoose');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
mongoose.connect('mongodb://localhost:27017/webproject',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const Schema=mongoose.Schema;

const AccountSchema= new Schema({
  username: String,
  password: String,
},{
  collection:'phuong'
});
const AccountModel = mongoose.model('phuong', AccountSchema)

module.exports=AccountModel

