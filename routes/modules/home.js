const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/', (req, res) => {
  const UserId = req.user.id
  Todo.findAll({ raw: true, nest: true, where: { UserId } })
    .then(todos => res.render('index', { todos }))
    .catch((error => {
      res.render('error', { message: 'error !' })
      return res.status(422).json(error)
    }))
})

module.exports = router