const express = require('express')
const app = express()
const data = require('./data.json')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const subredditdata =  data[subreddit]
    // console.log(subredditdata)
    if (subredditdata) {
        res.render('subreddit', { ...subredditdata })
    }
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})