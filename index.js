'use strict';

require("dotenv").config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
   const name = 'REST-Rant homepage';
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

/*
//    HELPER
*/

const trace = label => value => {
   console.log(`${label} --> ${value}`);
   return value;
};