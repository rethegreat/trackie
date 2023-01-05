const express = require('express')
const {
    createSharedSpending,
    getSharedSpending,
    getSharedSpendings
} = require('../controller/sharedSpendingController')


const router = express.Router()


// GET all Spendings
router.get('/', getSharedSpendings)

// GET a single Spending
router.get('/:id', getSharedSpending)

// POST a single workout
router.post('/', createSharedSpending)


module.exports = router