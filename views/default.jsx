'use strict';

const React = require('react');

function Default(html) {
   return (
      <html>
         <head>
            <title>REST-Rant</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href='/css/style.css'></link>
         </head>
         <body>
            <nav>
               <ul>
                  <li>
                     <a href="/">Home</a>
                  </li>
                  <li>
                     <a href="/places">Places</a>
                  </li>
                  <li>
                     <a href="/places/new">Add Place</a>
                  </li>
               </ul>
            </nav>

            <h1><a href='/'>REST-Rant</a></h1>
            {html.children}
         </body>
      </html>
   )
}

module.exports = Default;