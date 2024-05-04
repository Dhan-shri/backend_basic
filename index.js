require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World dhanshri server is starting!')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('Thank for connecting to Dhanshri')
})

//get  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
