const router = require('express').Router()
const db = require('../models')

// const places = require('../models/places');

const {
   trace,
   stub
} = require('../helper');

router.get('/', (req, res) => {
   const route = '/places (GET)';
   trace(route)('');

   db.Place.find()
      .then((places) => {
         res.render('places/index.jsx', {
            places
         })
      })
      .catch(err => {
         trace('Error')(err)
         res.redirect('error404');
      })


});

router.post('/', (req, res) => {
   const route = '/places (POST)';
   trace(route)(req.body);

   if (!req.body.pic) { req.body.pic = undefined }

   db.Place.create(req.body)
      .then(() => {
         res.redirect('/places')
      })
      .catch(err => {
         trace(err.name)(err);
         if (err && err.name == 'ValidationError') {
            let message = ''
            for(let field in err.errors) {
               message+= `${field} was ${err.errors[field].value}. `
               message+= `${err.errors[field].message}.`
            }
            res.render('places/new', {
               message
            })
         } else {
            res.render('error404')
         }
      })

});

router.get('/new', (req, res) => {
   const route = '/places/new (GET)';
   trace(route)('');

   // res.send(stub(route))
   res.render('places/new.jsx')
});

router.get('/:id', (req, res) => {
   const route = '/places/:id (GET)';
   const id = req.params.id
   trace(route)(id);


   db.Place.findById(id)
      .then(place => {
         res.render('places/show', {
            place
         })
      })
      .catch(err => {
         console.log('err', err)
         res.render('error404')
      })

});

router.put('/:id', (req, res) => {
   const route = '/places/:id (PUT)';
   const id = req.params.id
   trace(route)(id);

   // let id = Number(req.params.id)
   // if (isNaN(id)) {
   //    res.render('error404')
   // } else if (!places[id]) {
   //    res.render('error404')
   // } else {
   //    // Dig into req.body and make sure data is valid
   //    if (!req.body.pic) {
   //       // Default image if one is not provided
   //       req.body.pic = 'http://placekitten.com/400/400'
   //    }
   //    if (!req.body.city) {
   //       req.body.city = 'Anytown'
   //    }
   //    if (!req.body.state) {
   //       req.body.state = 'USA'
   //    }

   //    // Save the new data into places[id]
   //    places[id] = req.body
   //    res.redirect(`/places/${id}`)
   // }
});

router.get('/:id/edit', (req, res) => {
   const route = '/places/:id/edit (GET)';
   const id = req.params.id
   trace(route)(id);

   db.Place.findById(id)
      .then(place => {
         res.render('places/edit', {
            place
         })
      })
      .catch(err => {
         console.log('err', err)
         res.render('error404')
      })
});

router.delete('/:id', (req, res) => {
   const route = '/places/:id (DELETE)';
   const id = req.params.id
   trace(route)(id);

   db.Place.findByIdAndDelete(id)
      .then(place => {
         res.status(303).redirect('/places')
      })
      .catch((err) => {
         console.log(err);
      })
});

router.post('/:id/rant', (req, res) => {
   const route = '/places/:id/rant (POST)';
   const id = req.params.id;
   trace(route)(id);

   res.send(stub(route))
});

router.delete('/:id/rant/:rantId', (req, res) => {
   const route = '/places/:id/rant/:rantId (DELETE)';
   const id = req.params.id;
   const rantId = req.params.rantId;
   trace(route)(`id: ${id}, rantId:${rantId}`);

   res.send(stub(route))
});

module.exports = router