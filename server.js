const express = require('express');
const connectDB = require('./config/db');

const app = express();

const API_URL = '/api';

connectDB();

app.use(
  express.json({
    extended: false
  })
);

app.use(`${API_URL}/users`, require('./routes/users'));
app.use(`${API_URL}/auth`, require('./routes/auth'));
app.use(`${API_URL}/songs`, require('./routes/songs'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
