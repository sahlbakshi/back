const express = require('express')
const app = express()
const port = 3000

// req : request
// res : response
app.get('/', (req, res) => {
    console.log('homepage')
})

app.get('/search', (req, res) => {
    console.log('searchpage')
})

app.get('/r/:subreddit', (req, res) => {
    // name subreddit has to same
    const { subreddit } = req.params;
    res.send(`this is the ${subreddit} sub reddit`)
})

app.listen(port, () => {
    console.log('SERVER HERE')
})
