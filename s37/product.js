const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/shop')
.then(() => { console.log("CONNECTION OPEN") })
.catch((error) => { console.log(error) })

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        onSale: {
            type: Boolean,
            default: false,
        },
    }
)

/*
const bike = new Product({name: 'Mountain Bike', 
                          price: 599})

bike.save()
.then(data => {
    console.log('IT SAVED')
    console.log(data)
})
.catch(error => {
    console.log('ERROR')
    console.log(error)
})
*/

// instance methods used on an istance of a model
// static methods used on the model itself

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema)


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
}

findProduct();