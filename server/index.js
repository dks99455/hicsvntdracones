const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const router = require('./router.js');

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use('/', router);

app.listen(PORT, (err) =>{
    err ? console.log(err) : console.log(`Listening on port ${PORT}...`)
})