// HOW ABOUT SEPARATING THE CONNECTION FROM THE SEEDS
// HOW TO DO THAT? SEE IF DONE BY THE END OF THIS S38

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => { 
    console.log("CONNECTION OPEN") 
})
.catch((error) => { 
    console.log("CONNECTION ERROR")
    console.log(error) 
})

const Product = require('./models/product');

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts);