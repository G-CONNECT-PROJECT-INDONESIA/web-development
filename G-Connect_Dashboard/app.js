const express = require('express');
const app = express();
const config = require('./config');
const mqtt = require('./lib/mqtt');
const Router = require('./routes/index');

// on public folder, use ejs as template instead of html (to easify routing)
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// direct any route to / 
app.use(express.static(__dirname + '/public'));
app.use('/', Router);

const port = 8889;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
