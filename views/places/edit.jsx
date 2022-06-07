

const React = require('react')
const Def = require('../default.jsx')

function edit_form({ place, id }) {
   return (
      <Def>
         <main>
            <h2>Edit Place</h2>
            <form method="POST" action={`/places/${id}?_method=PUT`}>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="name">Place Name</label>
                     <input
                        className="form-control"
                        id="name"
                        name="name"
                        value={place.name}
                        required />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Picture</label>
                     <input
                        className="form-control"
                        id="pic"
                        name="pic"
                        value={place.pic} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="city">City</label>
                     <input
                        className="form-control"
                        id="city"
                        name="city"
                        value={place.city} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="state">State</label>
                     <input
                        className="form-control col-sm-6"
                        id="state"
                        name="state"
                        value={place.state} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group">
                     <label htmlFor="cuisines">Cuisines</label>
                     <input
                        className="form-control col-sm-6"
                        id="cuisines"
                        name="cuisines"
                        value={place.cuisines}
                        required />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Save" />
                  <div>
                     <a href={`/places/${id}`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>
         </main>
      </Def>
   )
}

module.exports = edit_form
