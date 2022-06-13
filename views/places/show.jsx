

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show({ place }) {
   trace(' | places/show.jsx')('show({place})');

   let comments = (
      <p className="inactive">
         No comments yet
      </p>
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
                  <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                     <div className='buttons'> <div>
                        <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
                     </div>
                        <button type="submit" className="btn btn-danger marginLeft20">
                           Delete
                        </button>
                     </div>
                  </form>
               </div>
               <div className="form-group col-sm-1"></div>
            </div>
            <div className='form-group col-sm-12 padAll 15'>
               <h4>Comments:</h4>
               {comments}
            </div>
            <br />
            <h4>Add Your Own Rant or Rave</h4>
            <form method="POST" action={`/places/${place.id}/rant`}>
               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="author">Author</label>
                     <input className="form-control"
                        id="author"
                        name="author" />
                  </div>

               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="content">Comment</label>
                     <input className="form-control"
                        id="content"
                        name="content"
                        type='textarea' />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="stars">Stars</label>
                     <input className="form-control"
                        id="stars"
                        name="stars"
                        type="number"
                        min={1}
                        max={5}
                        step={0.5} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="rant">Rant?&nbsp;</label>
                     <input 
                        id="rant"
                        name="rant"
                        type="checkbox"
                        defaultChecked={false} />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Add" />
                  <div>
                     <a href={`/places/${place.id}`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>
         </main>



      </Def>
   )
}

module.exports = show

