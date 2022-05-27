'use strict';

const React = require('react');
const Def = require('./default');

function error404() {
   return (
      <Def>
         <main>
            <h2>404: PAGE NOT FOUND</h2>
            <p>Sorry, the page could not be found.</p>
         </main>
      </Def>
   )
}


module.exports = error404
