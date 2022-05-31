'use strict';

const router = require('express').Router()
const { trace, stub } = require('../helper');

const places = [{
   name: 'H-Thai-ML',
   city: 'Seattle',
   state: 'WA',
   cuisines: 'Thai, Pan-Asian',
   pic: '/images/taylor-kiser-6RJct18G_3I-unsplash.jpg',
   picCredit: 'Photo by Taylor Kiser at unsplash.com',
}, {
   name: 'Coding Cat Cafe',
   city: 'Phoenix',
   state: 'AZ',
   cuisines: 'Coffee, Bakery',
   pic: '/images/istockphoto-1339466407-1024x1024.jpg',
   picCredit: `unsplash.com`,
}]

router.get('/', (req, res) => {
   const route = '/places (GET)';

   trace(route)(req.params);

   res.render('places/index.jsx', places)
});

router.post('/', (req, res) => {
   const route = '/places (POST)';

   trace(`${route} --> req.body`)(req.body);

   res.send(stub(route))
});

router.get('/new', (req, res) => {
   const route = '/places/new (GET)';
   trace(route)(req.params);

   // res.send(stub(route))
   res.render('places/new.jsx')
});

router.get('/:id', (req, res) => {
   const route = '/places/:id (GET)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

router.put('/:id', (req, res) => {
   const route = '/places/:id (PUT)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

router.get('/:id/edit', (req, res) => {
   const route = '/places/:id/edit (GET)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

router.delete('/:id', (req, res) => {
   const route = '/places/:id (DELETE)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

router.post('/:id/rant', (req, res) => {
   const route = '/places/:id/rant (POST)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

router.delete('/:id/rant/:rantId', (req, res) => {
   const route = '/places/:id/rant/:rantId (DELETE)';
   const params = req.params;
   trace(route)('');
   trace(' | params')(params);

   res.send(stub(route))
});

module.exports = router