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
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(over9000db => {
        res.json(over9000db);
      })
      .catch(err => {
        res.json(err);
      });
  });
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(over9000db => {
        res.json(over9000db);
      })
      .catch(err => {
        res.json(err);
      });
  });
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(over9000db => {
        console.log(over9000db)
        res.json(over9000db);
      })
      .catch(err => {
        res.json(err);
      });
  });