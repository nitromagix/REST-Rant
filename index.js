'use strict';

require("dotenv").config();
const express = require('express');
const expressReactViews = require('express-react-views').createEngine();
const {trace, stub} = require('./helper');

const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', expressReactViews)

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
   const route = '/ (GET)';
   trace(route)(req.params);
   
   // res.send(stub(route));
   res.render('home');

});

app.get('*', (req, res) => {
   const route = '404 (GET)'
   const params = req.params;
   const query = req.query;
   trace(route)('');
   trace(' | params')(params);
   trace(' | query')(query);

   // res.status(404).send(stub(route));
   res.render('error404');
});

app.listen(3333, () => {
   trace('Server listening | PORT')(process.env.PORT);
});
