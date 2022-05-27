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
            <h1>REST-Rant</h1>
            {html.children}
         </body>
      </html>
   )
}

module.exports = Default;