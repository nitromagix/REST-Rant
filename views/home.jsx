'use strict';

const React = require('react');
const Def = require('./default');

function home() {
   return (
      <Def>
         <main>
            <h2>HOME</h2>
            <a href="/places">
               <button className="btn-primary">Places Page</button>
            </a>

         </main>
      </Def>
   )
}


module.exports = home
