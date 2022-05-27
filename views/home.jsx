'use strict';

const React = require('react');
const Def = require('./default');

function home() {
   return (
      <Def>
         <main>
            <h2>HOME</h2>
            <div className='banner'>
               <img className='banner' src='/images/ella-olsson-2IxTgsgFi-unsplash.jpg' alt='Some tasty food to rant about!' />
               <span><sup>Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
               </sup></span>
            </div>
            <a href='/places'>
               <button className='btn-primary'>Places Page</button>
            </a>

         </main>
      </Def>
   )
}


module.exports = home
