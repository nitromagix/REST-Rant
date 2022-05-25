'use strict';

const router = require('express').Router()
const {trace} = require('../helper');
const {stub} = require('../helper');

router.get('/', (req, res) => {
   const route = '/places (GET)';
   trace(route)(req.params);

   res.send(stub(route))
});

router.post('/', (req, res) => {
   const route = '/places (POST)';
   trace(route)(req.params);

   res.send(stub(route))
});

router.get('/new', (req, res) => {
   const route = '/places/new (GET)';
   trace(route)(req.params);

   res.send(stub(route))
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
