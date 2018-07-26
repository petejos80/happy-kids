var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../../models/Item');
var passport = require('passport');
require('../../config/passport')(passport);
const itemsController = require("../../controllers/itemsController");


// GET ALL ITEMS
router.get('/', function(req, res) {
    Item.find(function (err, items) {
      if (err) return next(err);
      res.json(items);
    });
});


// POST A NEW ITEM
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Item.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});


// DELETE AN ITEM BY ID
router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Item.remove({_id: req.params.id}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});


// RETRIEVE AUTH TOKEN HEADER
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;