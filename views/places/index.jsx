'use strict';

const React = require('react');
const Default = require('../default');

const { trace } = require('../../helper');

function index({ places }) {

   trace(' | places --> places (data)')(places);
   const placesFormatted = places.map((place, index) => {
      return (
         <div className="col-sm-6 place">
            <h2>
               <a href={`/places/${index}`} >
                  {place.name}
               </a>
            </h2>
            <p className="text-center">
               {place.cuisines}
            </p>
            <div className='banner'>
               <img src={place.pic} alt={place.name}></img>
               <span><sup>{place.picCredit}</sup></span>
            </div>
            <p className="text-center">
               Located in {place.city}, {place.state}
            </p>
         </div>
      )
   })

   // const placesFormatted = places.map((place) => {
   //    return (
   //       <div className='col-sm-6 place'>
   //          <hr />
   //          <h3 className='text-center'>{place.name}</h3>
   //          <div className='text-center'>
   //             <img src={place.pic} alt={place.name}></img>
   //             <span><sup>{place.picCredit}</sup></span>
   //          </div>
   //          {/* <div className="thumb1" style={{background:'url(' + place.pic + ')'}}></div>    */}

   //          <ul className='text-center'>
   //             <li>City: {place.city}</li>
   //             <li>State: {place.state}</li>
   //             <li>Cuisines: {place.cuisines}</li>
   //          </ul>
   //          <hr />
   //       </div>
   //    )
   // });
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
