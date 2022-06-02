'use strict';

const React = require('react');

const { trace } = require('../helper');

function Default(html) {
   trace(' | default')('Default(html)')
   return (
      <html>
         <head>
            <title>REST-Rant</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>

            <link rel="stylesheet" href='/css/style.css'></link>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>

         </head>
         <body>
         {/* https://www.geeksforgeeks.org/react-bootstrap-nav-component/ */}

            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
               <a className="navbar-brand leftMargin20" href="#">REST-Rant</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <a className="nav-item nav-link" href="/">Home</a>
                     <a className="nav-item nav-link" href="/places">Places</a>
                     <a className="nav-item nav-link" href="/places/new">Add Place</a>
                     <a className="nav-item nav-link disabled" href="#">_</a>
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