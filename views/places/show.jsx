'use strict';

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show({ place, id }) {
   return (
      <Def>
         <main>
            <div className='row textAlignCenter'>
               <div className="form-group col-sm-2"></div>
               <div className="form-group col-sm-4 padAll20">
                  <div className='banner'>
                     <img src={place.pic} alt={place.name}></img>
                     <span><sup>{place.picCredit}</sup></span>
                  </div>
               </div>
               <div className="form-group col-sm-4 padAll20">
                  <h2>
                     {place.name}
                  </h2>
                  <h4>Rating</h4>
                  <p className="text-center">Not rated</p>
                  <h4>Description</h4>
                  <p className="text-center">
                     Located in {place.city}, {place.state} and serving {place.cuisines}
                  </p>

                  <h4>Comments</h4>
                  <p className="text-center">No comments yet</p>
               </div>
               <div className="form-group col-sm-2"></div>
            </div>
         </main>

         <form method="POST" action={`/places/${id}?_method=DELETE`}>
            <div className='buttons'> <div>
               <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a>
            </div>
               <button type="submit" className="btn btn-danger leftMargin20">
                  Delete
               </button>
            </div>
         </form>

      </Def>
   )
}

module.exports = show

