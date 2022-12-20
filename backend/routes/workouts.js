const express = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res)=> {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: "GET a single workout"})
})

// POST a single workout
router.post('/', (req, res) =>{
    res.json({mssg: "POST a workout"})
})

// DELETE a single workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: "DELETE a workout"})
})

// PATCH a single workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router