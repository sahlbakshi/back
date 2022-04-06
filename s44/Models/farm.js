const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/relationships')
.then(() => {
    console.log('CONNECTED TO DATABASE')
})
.catch((ERROR) => {
    console.log(ERROR)
})

const productSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: [ 'Spring', 'Summer', 'Fall', 'Winter' ]
    }
})

const Product = mongoose.model('product', productSchema);

/*
Product.insertMany([
    {name: 'Melon', price: 4.99, season: 'Summer'},
    {name: 'Mango', price: 6.99, season: 'Summer'},
    {name: 'Apple', price: 2.99, season: 'Winter'},
])
*/

const farmSchema = new Schema ({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: Product }]
})

const Farm = mongoose.model('farm', farmSchema);

const makeFarm = async () => {
    const farm = new Farm({name: 'Full Farms', city: 'CA', });
    const melon = await Product.findOne({name: 'Melon'});
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

Farm.findOne({name: 'Full Farms'}).populate('products')
.then((farm) => console.log(farm))