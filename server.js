const express = require('express');
const connectDB = require('./config/db');

const app = express();

const API_URL = '/api';

connectDB()

app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to the song request api'
    })
})

app.use(`${API_URL}/users`, require('./routes/users'));
app.use(`${API_URL}/auth`, require('./routes/auth'));
//app.use(`${API_URL}/songs`, require('./routes/songs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));