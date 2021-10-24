const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Need type of exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Need name of exercise"
        },
        duration: {
            type: Number,
            required: "Enter duration of workout"
        },
        distance: {
            type: Number,
            required: "Enter distane of workout"
        },
        weight: {
            type: Number,
            required: "Need your weight"
        },
        reps: {
            type: Number,
            required: "Need number of reps"
        },
        sets: {
            type: Number,
            required: "Need number of set"
        }
    }]
});


const Workout = mongoose.model("workout3", workoutSchema);

module.exports = Workout;