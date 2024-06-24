const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/facebook-oauth'; // Update with your MongoDB URI
mongoose.connect(uri)
  .then((res) => {
    console.log('Connected to MongoDB');
   
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;