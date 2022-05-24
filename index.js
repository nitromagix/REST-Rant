'use strict';

require("dotenv").config();
const express = require('express');
const {trace} = require('./helper');
const {stub} = require('./helper');

const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
   const name = '/';
   res.send(stub(name))
   trace('page served (GET)')(name);
});

app.get('*', (req, res) => {
   const name = '404';
   res.status(404).send(stub(name))
   trace('page served (GET)')(name);
});

app.listen(3333, () => {
   trace('Server listening | PORT')(process.env.PORT);
});
