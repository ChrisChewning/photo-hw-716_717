const express = require('express');
const app = express();
const port = 3000;
require ('./db/db')



app.listen(port, () => {
  console.log('App is listening on ', port);
})