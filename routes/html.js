const router = require("express").Router();
const Workout = require("../models/workout.js");
router.post("/api/workouts", (req, res) => {
    console.log("route: post/api/workouts");
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("route: put/api/workouts/" + params.id);
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
router.get("/api/workouts", (req, res) => {
    console.log("route: get/api/workouts");
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
router.get("/api/workouts/range", (req, res) => {
    console.log("route: get/api/workouts/range")
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
router.delete("/api/workouts", ({ body }, res) => {
    console.log("route: delete/api/workouts")
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});
module.exports = router;