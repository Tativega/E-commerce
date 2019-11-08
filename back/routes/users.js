const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", function(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => res.status(400).send(console.log(err)));
});

module.exports = router;
