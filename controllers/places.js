const router = require('express').Router()
const db = require('../models')

// const places = require('../models/places');

const {
   trace,
   stub
} = require('../helper');

// RETRIEVE - INDEX

router.get('/', async (req, res) => {
   const route = '/places (GET)';
   trace(route)('');

   const places = await db.Place.find();
   res.render('places/index', {
      places
   });
});

// CREATE - NEW (PLACE)

router.post('/', async (req, res) => {
   const route = '/places (POST)';
   trace(route)(req.body);

   if (!req.body.pic) {
      req.body.pic = undefined
   }

   try {
      const newPlace = await db.Place.create(req.body);
      res.redirect('/places');
   } catch (err) {
      trace(err.name)(err);
      if (err && err.name == 'ValidationError') {
         let message = ''
         for (let field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
         }
         const body = req.body;
         res.render('places/new', {
            message,
            body
         })
      } else {
         res.render('error404')
      }
   }

});

// RETRIEVE - NEW

router.get('/new', async (req, res) => {
   const route = '/places/new (GET)';
   trace(route)('');

   // res.send(stub(route))
   res.render('places/new.jsx')
});

// RETRIEVE - SHOW

router.get('/:id', async (req, res) => {
   const route = '/places/:id (GET)';
   const id = req.params.id
   trace(route)(id);

   const foundPlace = await db.Place
      .findById(id)
      .populate('comments');
   trace('comments')(foundPlace.comments)
   res.render('places/show', {
      place: foundPlace
   });
});

// UPDATE

router.put('/:id', async (req, res) => {
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

// RETRIEVE - EDIT

router.get('/:id/edit', async (req, res) => {
   const route = '/places/:id/edit (GET)';
   const id = req.params.id
   trace(route)(id);

   const foundPlace = await db.Place.findById(id);
   res.render('places/edit', {
      place: foundPlace
   })
});

// DELETE (PLACE)

router.delete('/:id', async (req, res) => {
   const route = '/places/:id (DELETE)';
   const id = req.params.id
   trace(route)(id);

   const deletedPlace = await db.Place.findByIdAndDelete(id);
   res.status(303).redirect('/places')
});

// CREATE - NEW (RANT)

router.post('/:id/rant', async (req, res) => {
   const route = '/places/:id/rant (POST)';
   const id = req.params.id;
   trace(route)(id);

   res.send(stub(route))
});

// DELETE (RANT)

router.delete('/:id/rant/:rantId', async (req, res) => {
   const route = '/places/:id/rant/:rantId (DELETE)';
   const id = req.params.id;
   const rantId = req.params.rantId;
   trace(route)(`id: ${id}, rantId:${rantId}`);

   res.send(stub(route))
});

module.exports = router