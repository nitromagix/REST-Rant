'use strict';

const React = require('react');
const {trace} = require('../../helper');
const Def = require('../default');

function index(data) {
   
   trace('index.jsx . index(data) ... data')(data);
   trace(' | data.places')(data.places);
   const places = [data[0], data[1]]; // how the activity showed to get the data did not work. data is NOT iterable. came up with a temp work around. ask Aram on Thurs.
   trace(' | places')(places);

   const placesFormatted = places.map((place) => {
      return (
         <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name}></img>
            <h3>City: {place.city}</h3>
            <h3>State: {place.state}</h3>
            <h3>Cuisines: {place.cuisines}</h3>
         </div>
      )
   });
   return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
}

 

module.exports = index;
