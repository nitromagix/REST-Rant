

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show({ place }) {
   trace(' | places/show.jsx')('show({place})');

   let comments = (
      <h4 className="inactive">
         No comments yet
      </h4>
   )
   if (place.comments.length) {
      comments = place.comments.map(c => {
         return (
            <div className="border padAll10">
               <h5 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h5>
               <p>{c.content}</p>
               <h5>
                  <strong>- {c.author}</strong>
               </h5>
               <h6>Rating: {c.stars}</h6>
            </div>
         )
      })
   }

   return (
      <Def>
         <main>
            <div className='row textAlignCenter'>
               <div className="form-group col-sm-1"></div>
               <div className="form-group col-sm-6 padAll15">
                  <div className='banner'>
                     <img src={place.pic} alt={place.name}></img>
                     <span><sup>{place.picCredit}</sup></span>
                  </div>
                  <h4>Located in {place.city}, {place.state}</h4>
               </div>
               <div className="form-group col-sm-4 padAll15">
                  <h2>
                     {place.name}
                  </h2>
                  <h4>Rating</h4>
                  <p className="text-center">Not rated</p>
                  <h4>Description</h4>
                  <p>
                     {place.showEstablished()}
                  </p>
                  <h4>Serving</h4>
                  <p>
                     {place.cuisines}
                  </p>

                  <h4>Comments:</h4>
                  {comments}
               </div>
               <div className="form-group col-sm-1"></div>
            </div>
         </main>

         <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
            <div className='buttons'> <div>
               <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
            </div>
               <button type="submit" className="btn btn-danger marginLeft20">
                  Delete
               </button>
            </div>
         </form>

      </Def>
   )
}

module.exports = show

