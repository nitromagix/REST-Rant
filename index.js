'use strict';

require("dotenv").config();
const express = require('express');
const {trace, stub} = require('./helper');

const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
   const route = '/ (GET)';
   trace(route)(req.params);
   
   res.send(stub(route))

});

app.get('*', (req, res) => {
   const route = '404 (GET)'
   const params = req.params;
   const query = req.query;
   trace(route)('');
   trace(' | params')(params);
   trace(' | query')(query);

   res.status(404).send(stub(route))
});

app.listen(3333, () => {
   trace('Server listening | PORT')(process.env.PORT);
});
