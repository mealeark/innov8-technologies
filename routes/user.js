const express = require('express');
const User = require('../database/models/user.js');
const router = express.Router();

router.route('/')
  .get((req,res) => {
    User
      .fetchAll()
      .then((users) => {
        res.json({ users });
      });
  });

module.exports = routers;