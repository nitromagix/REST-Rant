

const React = require('react');
const Def = require('../default');

const { trace } = require('../../helper');


function newComment({ placeId, body }) {
   trace(' | comment/new.jsx')('newComment()');
   return (
      <Def>
         <main>
            <h2>Add a New Rant/Rave</h2>
            <form method="POST" action={`/places/${placeId}/rant"`}>
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
                        name="content" />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="stars">City</label>
                     <input className="form-control"
                        id="stars"
                        name="stars"
                        type="number"
                        min={1}
                        max={5}
                        step={0.5} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="rant">Rant</label>
                     <input className="form-control"
                        id="rant"
                        name="rant"
                        type="checkbox"
                        defaultChecked={false} />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Add" />
                  <div>
                     <a href={`/places/${placeId}`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>



         </main>
      </Def>
   )
}


module.exports = newComment
