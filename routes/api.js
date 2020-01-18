const router = require('express').Router();
const Workout = require('./../models/workout');

// add a new workout
router.post('/api/workouts', (req, res) => {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})