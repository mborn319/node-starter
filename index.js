const express = require('express');
const routes = require('./routes/index');

// Load environment vars into process.env.
require('dotenv').config({ path: 'variables.env' });

// create our Express app
const app = express();

// use our own routes defined in routes/index.js
app.use('/', routes);

// READY?! Let's go!


// Start our app!
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
