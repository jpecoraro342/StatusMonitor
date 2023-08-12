'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');

// Constants
const PORT = 8030;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.head('/status', async (req, res) => {
  console.log('status up');
  res.status(200).send();
});

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ error: err });
})

var server = app.listen(process.env.PORT || PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${server.address().port}`);
});