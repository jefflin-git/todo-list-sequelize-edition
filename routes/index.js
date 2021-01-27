const express = require('express')
const router = express.Router()
const home = require('../routes/modules/home')
const users = require('../routes/modules/users')
const todos = require('../routes/modules/todos')
const auth = require('../routes/modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router