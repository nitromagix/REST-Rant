'use strict';

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show({ place, id }) {
   return (
      <Def>
         <main>
            <h2>
               {place.name}
            </h2>
            <h4>Rating</h4>
            <p className="text-center">Not rated</p>
            <h4>Description</h4>
            <p className="text-center">
               Located in {place.city}, {place.state} and serving {place.cuisines}
            </p>
            <div className='banner'>
               <img src={place.pic} alt={place.name}></img>
               <span><sup>{place.picCredit}</sup></span>
            </div>
            <h4>Comments</h4>
            <p className="text-center">No comments yet</p>

         </main>
         <a href={`/places/${id}/edit`} className="btn btn-warning">
            Edit
         </a>
         <form method="POST" action={`/places/${id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
               Delete
            </button>
         </form>
      </Def>
   )
}

module.exports = show

