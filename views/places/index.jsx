'use strict';

const React = require('react');
const {trace} = require('../../helper');
const Default = require('../default');

function index(data) {
   trace('index.jsx . index(data) ... data')(data);
   // trace(' | data.places')(data.places); // how the activity showed to get the data did not work. data.places does NOT exist (undefined)
   const places = [data[0], data[1]];    // AND data is NOT iterable. came up with a temp work around. ask Aram on Thurs.
   // trace(' | places')(places);

   const placesFormatted = places.map((place) => {
      return (
         <div>
            <h3>{place.name}</h3>
            <img src={place.pic} alt={place.name}></img>
            <h4>City: {place.city}</h4>
            <h4>State: {place.state}</h4>
            <h4>Cuisines: {place.cuisines}</h4>
         </div>
      )
   });
   return (
      <Default>
          <main>
              <h2>PLACES</h2>
              {placesFormatted}
          </main>
      </Default>
  )
}

 

module.exports = index;
