const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});