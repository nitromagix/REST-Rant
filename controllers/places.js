'use strict';

const router = require('express').Router()
const {trace} = require('../helper');
const {stub} = require('../helper');

router.get('/', (req, res) => {
   const name = '/places';
   res.send(stub(name))
   trace('page served (GET)')(name);
});

module.exports = router
