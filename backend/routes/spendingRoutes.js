const express = require('express')
const {
    createSpending,
    getSpending,
    getSpendings
} = require('../controller/spendingController')


const router = express.Router()


// GET all Spendings
router.get('/', getSpendings)

// GET a single Spending
router.get('/:id', getSpending)

// POST a single Spending
router.post('/', createSpending)


module.exports = router