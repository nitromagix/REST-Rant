'use strict';

require("dotenv").config();
const express = require('express');
const trace = require('./helper');

const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
   const name = '/';
   res.status(404).send(`
      <body>
         <h1>${name}</h1>
      </body>
   `)
   trace('page served (GET)')(name);
});

app.get('*', (req, res) => {
   const name = '404';
   res.send(`
      <body>
         <h1>${name}</h1>
      </body>
   `)
   trace('page served (GET)')(name);
});

app.listen(3333, () => {
   trace('Server listening | PORT')(process.env.PORT);
});
