const express = require('express')
const app = express()

// so that form tag has a patch request 
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// renameing V4 to uuid
const { v4: uuid } = require('uuid');

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

let comments = [
    {
        id: uuid(),
        username: 'todd',
        comment: 'lol that is very funny'
    },
    {
        id : uuid(),
        username: 'skyler',
        comment: 'i like to go birdwatching'
    },
    {
        id : uuid(),
        username: 'sk8erate',
        comment: 'there we go then'
    },
    {
        id : uuid(),
        username: 'jack',
        comment: 'i am going to the vet'
    }
]

// req.params
// req.body

app.get('/comments', (req, res) => {
    res.render('index', { comments })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id : uuid() })
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('new')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id == id)
    res.render('show', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    console.log(id);
    const newComment = req.body.comment
    const findComment = comments.find(c => c.id == id)
    findComment.comment = newComment
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id == id)
    res.render('edit', { comment })
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id != id)
    res.redirect('/comments')
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})