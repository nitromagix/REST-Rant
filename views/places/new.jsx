'use strict';

const React = require('react');
const Def = require('../default');

const { trace } = require('../../helper');


function newPlace() {
   return (
      <Def>
         <main>
            <h2>Add a New Place</h2>
            <form method="POST" action="/places">
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="name">Place Name</label>
                     <input className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Picture</label>
                     <input className="form-control" id="pic" name="pic" />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="city">City</label>
                     <input className="form-control" id="city" name="city" />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="state">State</label>
                     <input className="form-control" id="state" name="state" />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group">
                     <label htmlFor="cuisines">Cuisines</label>
                     <input className="form-control" id="cuisines" name="cuisines" required />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Add Place" />
                  <div>
                     <a href={`/places`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>



         </main>
      </Def>
   )
}


module.exports = newPlace
