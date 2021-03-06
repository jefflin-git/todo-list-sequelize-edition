const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const UserId = req.user.id
  Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(error => {
      console.log(error)
      res.render('error', { message: 'error !' })
    })
})

router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('edit', { todo: todo.toJSON() }))
    .catch(error => {
      res.render('error', { message: 'error !' })
    })
})

router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => {
      console.log(error)
      res.render('error', { message: 'error !' })
    })
})

router.delete('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  Todo.findOne({ where: { id, UserId } })
    .then(todo => todo.destroy())
    .then(() => res.redirect('/'))
    .catch(error => {
      console.log(error)
      res.render('error', { message: 'error !' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const UserId = req.user.id
  Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => {
      console.log(error)
      res.render('error', { message: 'error !' })
    })
})

module.exports = router