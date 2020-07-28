const db = require("../models");
const express = require("express");
const router = express.Router();

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { exercises: req.body },
        $inc: { totalDuration: req.body.duration },
      }
    )
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};