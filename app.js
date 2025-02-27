const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/youtube', require('./routes/youtube'));
app.use('/api/home', require('./routes/home'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});