
const express = require('express');
const path = require ('path');
const app = express();

// This is my Home page

app.get('/', (req, res) => {
    console.log('User hit the home page')
    res.status(200).send('Home page')
})

// This is my About page

app.get('/about', (req, res) => {
    console.log('User is hiting the about page')
    res.status(200).send("about page")
})

// Router does not exist 

app.all('*', (req, res) => {
    console.log('User hiting wrong page')
    res.status(404).send("<h3>Page is not found</h3>")
})

app.listen(5000, () => {
    console.log('App is listening on port 5000...')
})