// const express = require('express');
// const helmet = require('helmet')
// const app = express();
// app.use(helmet.hidePoweredBy())


// helmet.frameguard({action: 'deny'})





// // app.get('/', (req, res) => {
// //   res.send('Security measures applied');
// // });





const express = require('express');
const helmet = require('helmet');

const app = express(); // Initialize the Express app

app.use(helmet.frameguard({ action: 'deny' })); // Apply frameguard with 'deny' option

app.get('/', (req, res) => {
  res.send('Security middleware applied');
});

module.exports = app; // Export the app for testing if needed

































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
