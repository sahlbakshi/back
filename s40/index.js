const express = require('express')
const app = express()

// basic middleware example
app.use((req, res, next) => {
  req.requestTime = Date.now()
  console.log(req.method, req.path)
  next()
})

app.get('/', (req, res) => {
  console.log(req.requestTime)
  res.send("HOME PAGE")
})

// authentication example all routes
/*
app.use((req, res, next) => {
  const { password } = req.query
  if (password ==  'chickennuggets') {
    next()
  }
  res.send('ENTER PASSWORD IN QUERY STRING')
})

app.get('/secret', (req, res) => {
  res.send("protected secret")
})
*/

// authentication example with specific route
const verification = (req, res, next) => {
  const { password } = req.query
  if (password ==  'chickennuggets') {
    next()
  }
  res.send('ENTER PASSWORD IN QUERY STRING')
}

app.get('/secret', verification, (req, res) => {
  res.send("PASSWORD WORKED")
})

// ERROR 404 at end of file
app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(3000, () => {
  console.log(`LISTENING ON PORT 3000`)
})