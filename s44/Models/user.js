const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationships')
.then(() => {
    console.log('CONNECTED TO DATABASE')
})
.catch((ERROR) => {
    console.log(ERROR)
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
            _id: {id: false},
            street: String,
            city: String,
            state: String,
            country: String,
        }]
})

const User = mongoose.model('user', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'harry', 
        last: 'potter',
    }) 
    u.addresses.push({
        street: '123 sesame',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

makeUser()