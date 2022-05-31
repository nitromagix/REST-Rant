'use strict';

require("dotenv").config();
const express = require('express');
const expressReactViews = require('express-react-views').createEngine();
const { trace, stub } = require('./helper');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews);

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers and Routes
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

   // res.render('error404', {params: params});
   res.render('error404');
});

app.listen(process.env.PORT, () => {
   trace('Server listening | PORT')(process.env.PORT);
});