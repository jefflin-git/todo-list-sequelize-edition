const express = require('express')
const router = express.Router()
const home = require('../routes/modules/home')
const users = require('../routes/modules/users')
const todos = require('../routes/modules/todos')

router.use('/todos', todos)
router.use('/users', users)
router.use('/', home)

module.exports = router