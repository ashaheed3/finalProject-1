const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5001;
const app = express();
//const apiRoutes = require('./routes/apiRoutes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)


// Connect to the Mongo DB
connectDB();

// Use apiRoutes
//app.use('/api', apiRoutes);
//app.use(routes);
app.use(require('./routes/apiRoutes.js'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/favorites', require('./routes/api/favorites'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
}

// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
