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
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
               <a class="navbar-brand left20" href="#">REST-Rant</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                     <a class="nav-item nav-link" href="/">Home</a>
                     <a class="nav-item nav-link" href="/places">Places</a>
                     <a class="nav-item nav-link" href="/places/new">Add Place</a>
                     <a class="nav-item nav-link disabled" href="#">_</a>
                  </div>
               </div>
            </nav>
            {/* <nav>
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
            </nav> */}

            <h1><a href='/'>REST-Rant</a></h1>
            {html.children}
         </body>
      </html>
   )
}

module.exports = Default;