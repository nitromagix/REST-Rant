'use strict';

const React = require('react');
const { trace } = require('../helper');
const Def = require('./default');

function error404({ params }) {
   // trace(' | error404 --> params')({params})
   return (
      <Def>
         <main>
            <h2>404: PAGE NOT FOUND</h2>
            <p>Sorry, { params } could not be found.</p>
            <div className='banner'>
               <img className='banner' src='/images/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg' alt='Some tasty food to rant about!' />
               <span><sup>Photo by <a href="https://unsplash.com/@beccatapert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Becca Tapert</a> on <a href="https://unsplash.com/s/photos/free-find?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
               </sup></span>
            </div>
         </main>
      </Def>
   )
}


module.exports = error404
