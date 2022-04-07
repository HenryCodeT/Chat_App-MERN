// //// FIELDS /////////////////////////////////////////////////
console.log('************* 2-Config mongoose *****************');
const mongoose = require('mongoose');

const DATABASE_NAME = 'chatappdb';

// //// CONNECT SERVER TO DATABASE ////////////////////////////
// useNewUrlParser and useUnifiedTopology are options
// we pass in to get rid of deprecation messages in our terminal.
mongoose
  .connect(`mongodb://localhost/${DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) =>
    console.log('Something went wrong when connecting to the database ', err)
  );
console.log('-------------- 2-Config mongoose --------------');
