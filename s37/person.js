const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/shop')
.then(() => { console.log("CONNECTION OPEN") })
.catch((error) => { console.log(error) })

const personSchema = new mongoose.Schema({
        first: String,
        last: String,
    }
)

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    console.log('about to save')
})

personSchema.post('save', async function() {
    console.log('just saved')
})

const Person = mongoose.model('Person', personSchema);