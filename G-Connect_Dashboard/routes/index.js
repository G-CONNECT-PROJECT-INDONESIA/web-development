const express = require('express');
const router = express.Router();
const mqtt = require('../lib/mqtt');

router.get('/', (req, res) => {
  res.render('dashboard');
});

// temporary, migrating from index to ejs template dashboard.ejs
router.get('/index', (req, res) => {
  res.render('dashboard');
});

// realtime route
router.get('/REALTIME', (req, res) => {
  res.render('REALTIME');
});

//location route
router.get('/LOCATION', (req, res) => {
  res.render('LOCATION');
});

module.exports = router;
