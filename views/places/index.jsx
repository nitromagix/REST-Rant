'use strict';

const React = require('react');
const Default = require('../default');

const { trace } = require('../../helper');

function index(data) {

   // how the activity showed to get the data did not work. data.places does NOT exist (undefined)
   // AND data is NOT iterable. came up with a temp work around. ask Aram on Thurs.

   console.log(data);

   const places = [data[0], data[1]];    

   // trace(' | places')(places);

   const placesFormatted = places.map((place) => {
      return (
         <div className='col-sm-6 place'>
            <hr />
            <h3 className='text-center'>{place.name}</h3>
            <div className='text-center'>
               <img src={place.pic} alt={place.name}></img>
               <span><sup>{place.picCredit}</sup></span>
            </div>
            {/* <div className="thumb1" style={{background:'url(' + place.pic + ')'}}></div>    */}
            
            <ul className='text-center'>
            <li>City: {place.city}</li>
            <li>State: {place.state}</li>
            <li>Cuisines: {place.cuisines}</li>
            </ul>
            <hr />
         </div>
      )
   });
   return (
      <Default>
         <main>
            <h2 className='text-center'>PLACES</h2>
            <div className='row'>
               {placesFormatted}
            </div>
         </main>
      </Default>
   )
}



module.exports = index;
