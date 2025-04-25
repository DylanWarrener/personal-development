const express = require('express')
const router = express.Router() 

// router.get('/admin/add-product', (req, res, next) => {
//     res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
// })

// router.post('/admin/add-product', (req, res, next) => {
//     console.log('The body request:', req.body)  
//     res.redirect('/')
// })

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log('The body request:', req.body)  
    res.redirect('/')
})

module.exports = router