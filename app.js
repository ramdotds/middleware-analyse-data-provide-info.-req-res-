const { json } = require('body-parser');
const { error } = require('console');
const { response } = require('express');
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const _ = require('lodash')

// api key = '43144a306c9543f9ac524455932d1eb0'


let file = fs.readFile('./package.json','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
});


app = express();


axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43144a306c9543f9ac524455932d1eb0').then(response => {

    console.log(response.data)
}).catch(err => {
    console.log('Error: ' + err.message + ". Please Try again.")
});



app.get('/api/blog-search', (req, res) => {
    res.send(`<form action='/api/blog-search' method='post'><input type='text'><button type='submit'>Submit</button></form>`)
});

app.post('/api/blog-search', (req, res) => {
    data = axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43144a306c9543f9ac524455932d1eb0').then(response => {
    console.log(response.data)
    console.log('file written..')

    }).catch(err => {
        console.log('Error: ' + err.message + ". Please Try again.")
    });

    axios.post(file, response);
    res.send('Submited');
});



app.listen(80, () => {
    console.log('Request is running...');
});