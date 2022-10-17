const express = require('express');
const { get } = require('./routes/api');
const apiRoute = require('./routes/api')

const app = express();

app.use('/api',apiRoute);
app.get('/data', (req,res)=>{
    res.sendFile(__dirname + "/views/data.html");
})
app.listen ('3000');