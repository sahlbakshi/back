const express = require('express');
const app = express();

app.use(express.json()) // json
app.use(express.urlencoded({ extended: true })) // url encoded

app.set('view engine', 'ejs')

/*

app.get('/tacos', (req, res) => {
    console.log(req.body)
    res.send('GET')
})

// post has req.body NOT get
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`${meat} ${qty}`)
})

*/

const comments = [
    {
        username: 'todd',
        comment: 'lol that is very funny'
    },
    {
        username: 'skyler',
        comment: 'i like to go birdwatching'
    },
    {
        username: 'sk8erate',
        comment: 'there we go then'
    },
    {
        username: 'jack',
        comment: 'i am going to the vet'
    }
]

app.get('/comments', (req, res) => {
    res.render('index', { comments })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({username, comment})
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('new')
})

app.get('/comments/:id', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})