'use strict';

const React = require('react');
// const Nav = require('react-bootstrap/Nav');
const { trace } = require('../helper');
const { Navbar, NavItem, NavDropdown, MenuItem, Nav } = require('react-bootstrap');


function Default(html) {
   trace(' | default')('Default(html)')
   console.log(html);
   return (
      <html>
         <head>
            <title>REST-Rant</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>

            <link rel="stylesheet" href='/css/style.css'></link>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>

         </head>
         <body>
            <div className='stickyWrapper'>

               <Nav variant="pills" as="ul"
                  // activeKey={useState('navSelected')}
                  // onSelect={(selectedKey) => useState('navSelected') = selectedKey}
                  className='justify-content-center border-bottom padAll10'>
                  <Nav.Item as="li">
                     <Nav.Link href="/?t=home" eventKey="/?t=home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                     <Nav.Link href="/places?t=places" eventKey="/places?t=places">Places</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                     <Nav.Link href="/places/new?t=new" eventKey="/places/new">Add Place</Nav.Link>
                  </Nav.Item>
               </Nav>

               <h1><a href='/'>REST-Rant</a></h1>
               {html.children}
               <div class="push"></div>
            </div>
            <footer class="footer navbar-dark bg-primary padAll10">By Martin Prost 2021-{(new Date).getFullYear().toString()}</footer>

         </body>
      </html>
   )
}


module.exports = Default;