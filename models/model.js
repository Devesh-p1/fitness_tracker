const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const over9000Schema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
);

over9000Schema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const over9000 = mongoose.model("over9000", over9000Schema);

module.exports = over9000;