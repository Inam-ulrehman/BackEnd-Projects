const express = require('express');
const path = require ('path');
const app = express();

// Setup static and middleware
app.use(express.static('./public'))


// This was example but now i even put main index in static folder .

// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


app.all('*',(req, res) => {
    res.status(404).send("<h3>Resource not found</h3>")
})


app.listen(5000, () => {
    console.log('App is listening on port 5000...')
})