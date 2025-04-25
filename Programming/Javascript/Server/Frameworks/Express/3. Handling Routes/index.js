const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    console.log('This always runs!')
    next()
})

app.use('/add-product', (req, res, next) => {
    console.log('This runs if the route is /add-product')
    res.send('<h1>The add product page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('This runs if the route is /')
    res.send('<h1>The home page</h1>')
})

app.listen(3000)