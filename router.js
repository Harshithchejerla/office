const express = require('express')
const app = express()
const router = express.Router()
router.use((req, res, next) => {
  if (!req.headers['x-auth']) return next('router')
  next()
})
router.get('/user/:id', (req, res) => {
  res.send('hello, user!')
})
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})