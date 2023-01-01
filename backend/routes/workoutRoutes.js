const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')


const router = express.Router()


// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a single workout
router.post('/', createWorkout)

// DELETE a single workout
router.delete('/:id', deleteWorkout)

// PATCH a single workout
router.patch('/:id', updateWorkout)

module.exports = router