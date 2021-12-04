const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const app = express()

// req => middleware => res
app.use(morgan('tiny'))
// app.use([authorize, logger])
// api/home/about

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('products')
})

app.get('/api/items', (req, res) => {
    res.send("items")
})


app.listen(5000, () => console.log('App is listening on port 5000'))