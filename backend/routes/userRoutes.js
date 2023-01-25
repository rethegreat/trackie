const express = require('express')
const {
    createUser,
    getUser
} = require('../controller/userController')


const router = express.Router()

router.get('/:email', getUser)

router.post('/', createUser)


module.exports = router