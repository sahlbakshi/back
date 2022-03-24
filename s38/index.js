const express = require('express')
const Product = require('./models/product')
const mongoose = require("mongoose");
const methodOverride = require("method-override")

const app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => { 
    console.log("CONNECTION OPEN") 
})
.catch((error) => { 
    console.log("CONNECTION ERROR")
    console.log(error) 
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    console.log(product)
    res.redirect(`products/${product._id}`)
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/show', { product }) 
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true})
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
