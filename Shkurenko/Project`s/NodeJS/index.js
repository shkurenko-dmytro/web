const express  = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

const PORT = 5000;
app.use(express.static( path.resolve(__dirname,'../../../Kutzenko/legacy_homes/app')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../../Kutzenko/legacy_homes/app/index.html'))
})
app.get('/objects', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../../Kutzenko/legacy_homes/app/objects.html'))
})
app.post('/post',(req, res) => {
    res.status(201).send('4jng4g4')
})
app.listen(PORT,() => {
    console.log(`Server has been started on port ${PORT}...`);
})




