const router = require("express").Router();
const Workout = require("../models/model.js");
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(over9000db => {
        res.json(over9000db);
      })
      .catch(err => {
        res.json(err);
      });
  });