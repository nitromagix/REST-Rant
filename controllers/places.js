'use strict';

const router = require('express').Router()
const trace = require('../helper');

router.get('/', (req, res) => {
   const name = '/places';
   res.send(`
      <body>
         <h1>${name}</h1>
      </body>
   `)
   trace('page served (GET)')(name);
});

module.exports = router
