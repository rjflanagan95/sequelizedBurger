var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.findAll().then(function(result) {
    res.render("index", { burgers: result });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create({
    burger_name: req.body.burger_name
  }).then(function(result) {
    res.status(204).end();
  });
});

router.put("/burgers/:id", function(req, res) {

  burger.update({
    devoured: true}, 
    {
    where: {
      id: req.params.id 
    }
  }).then(function(result) {
    res.sendStatus(200);
  });
});

module.exports = router;