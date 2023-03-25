const express=require('express');
const cors=require('cors');
const { urlencoded } = require('express');
const user=require('./route/user')
const note=require('./route/note')
const app=express();

app.use(express.json());
// app.use(urlencoded);
app.use(cors())
app.use('/',user)
app.use('/',note)
module.exports=app;