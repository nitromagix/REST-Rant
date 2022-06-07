const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   pic: String,
   picCredit: String,
   cuisines: {
      type: String,
      required: true
   },
   city: {
      type: String,
      default: 'Anytown'
   },
   state: {
      type: String,
      default: 'California'
   },
   founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


















// module.exports = [{
   // name: 'H-Thai-ML',
   // city: 'Seattle',
   // state: 'WA',
   // cuisines: 'Thai, Pan-Asian',
   // pic: '/images/taylor-kiser-6RJct18G_3I-unsplash.jpg',
   // picCredit: 'Photo by Taylor Kiser at unsplash.com',
// }, {
//    name: 'Coding Cat Cafe',
//    city: 'Phoenix',
//    state: 'AZ',
//    cuisines: 'Coffee, Bakery',
//    pic: '/images/istockphoto-1339466407-1024x1024.jpg',
//    picCredit: `unsplash.com`,
// }, {
//    name: 'Coding Cat Cafe',
//    city: 'Phoenix',
//    state: 'AZ',
//    cuisines: 'Coffee, Bakery',
//    pic: '/images/istockphoto-1339466407-1024x1024.jpg',
//    picCredit: `unsplash.com`,
// }, {
//    name: 'Coding Cat Cafe',
//    city: 'Phoenix',
//    state: 'AZ',
//    cuisines: 'Coffee, Bakery',
//    pic: '/images/istockphoto-1339466407-1024x1024.jpg',
//    picCredit: `unsplash.com`,
// }]