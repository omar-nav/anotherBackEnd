const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})

module.exports = router